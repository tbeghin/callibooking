import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {ShowState} from '../../../store/reducers';
import {showActions} from '../../../store/actions';
import {Show} from '../../../models';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.scss']
})
export class ShowFormComponent implements OnInit {
  showNewPiece: boolean;
  showNewTheater: boolean;
  showFormGroup: FormGroup;
  dateControl: FormControl;
  pieceTitleControl: FormControl;
  pieceDescriptionControl: FormControl;
  theaterNameControl: FormControl;

  constructor(private readonly showStore: Store<ShowState>) {
    this.showNewPiece = false;
    this.showNewTheater = false;
    this.dateControl = new FormControl(null, Validators.required);
    this.pieceTitleControl = new FormControl(null, Validators.required);
    this.pieceDescriptionControl = new FormControl(null, Validators.required);
    this.theaterNameControl = new FormControl(null, Validators.required);
    this.showFormGroup = new FormGroup({
      dateControl: this.dateControl,
      pieceTitleControl: this.pieceTitleControl,
      pieceDescriptionControl: this.pieceDescriptionControl,
      theaterNameControl: this.theaterNameControl,
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.showFormGroup.valid) {
      const show: Show = {
        date: this.dateControl.value,
        piece: {title: this.pieceTitleControl.value, description: this.pieceDescriptionControl.value},
        theater: {name: this.theaterNameControl.value}
      };
      this.showStore.dispatch(showActions.saveShow({show}));
    }
  }
}
