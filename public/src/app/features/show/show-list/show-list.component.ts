import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {Show} from '../../../models';
import {ShowState} from '../../../store/reducers';
import {showSelectors} from '../../../store/selectors';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {
  shows$: Observable<Show[]> | undefined;

  constructor(private readonly showStore: Store<ShowState>) { }

  ngOnInit(): void {
    this.shows$ = this.showStore.select(showSelectors.allShow);
  }

}
