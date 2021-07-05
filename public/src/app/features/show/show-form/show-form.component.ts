import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Piece, Show, Theater} from '../../../models';
import {showActions} from '../../../store/actions';
import {ShowState} from '../../../store/reducers';
import {pieceSelectors} from '../../../store/selectors/piece.selectors';
import {theaterSelectors} from '../../../store/selectors/theater.selectors';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.scss']
})
export class ShowFormComponent implements OnInit {
  show$: Observable<Show | undefined> | undefined;
  selectPieceDisabled: boolean;
  selectTheaterDisabled: boolean;
  pieces$: Observable<Piece[]>;
  theater$: Observable<Theater[]>;
  showFormGroup: FormGroup;
  dateControl: FormControl;
  pieceGroup: FormGroup;
  pieceCtrl: FormControl;
  pieceIdCtrl: FormControl;
  pieceTitleCtrl: FormControl;
  pieceDescriptionCtrl: FormControl;
  theaterGroup: FormGroup;
  theaterCtrl: FormControl;
  theaterIdCtrl: FormControl;
  theaterNameCtrl: FormControl;

  constructor(private readonly showStore: Store<ShowState>) {
    this.selectPieceDisabled = false;
    this.selectTheaterDisabled = false;
    this.pieces$ = this.showStore.select(pieceSelectors.allPieces);
    this.theater$ = this.showStore.select(theaterSelectors.allTheaters);
    this.dateControl = new FormControl(null, Validators.required);
    this.pieceCtrl = new FormControl(null);
    this.pieceIdCtrl = new FormControl(null);
    this.pieceTitleCtrl = new FormControl(null);
    this.pieceDescriptionCtrl = new FormControl(null);
    this.pieceGroup = new FormGroup({
      id: this.pieceIdCtrl,
      title: this.pieceTitleCtrl,
      description: this.pieceDescriptionCtrl,
      piece: this.pieceCtrl
    });
    this.theaterCtrl = new FormControl(null);
    this.theaterIdCtrl = new FormControl(null);
    this.theaterNameCtrl = new FormControl(null);
    this.theaterGroup = new FormGroup({
      id: this.theaterIdCtrl,
      name: this.theaterNameCtrl,
      theater: this.theaterCtrl
    });
    this.showFormGroup = new FormGroup({
      dateControl: this.dateControl,
      piece: this.pieceGroup,
      theater: this.theaterGroup,
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.showFormGroup.valid) {
      const show: Show = {
        date: this.dateControl.value,
        piece: this.pieceCtrl.value || {title: this.pieceTitleCtrl.value, description: this.pieceDescriptionCtrl.value},
        theater: this.theaterCtrl.value || {name: this.theaterNameCtrl.value}
      };
      this.showStore.dispatch(showActions.saveShow({show}));
    }
  }

  showAdd(isPiece: boolean | null, isTheater: boolean | null, control: FormControl) {
    this.selectPieceDisabled = isPiece === null ? this.selectPieceDisabled : isPiece;
    this.selectTheaterDisabled = isTheater === null ? this.selectTheaterDisabled : isTheater;
    if (isPiece || isTheater) {
      control.reset();
      control.disable();
    } else {
      control.enable();
    }
  }
}
