import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ConfirmModalComponent} from '../modals/confirm-modal/confirm-modal.component';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [ConfirmModalComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ModalModule {
}
