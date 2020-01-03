import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['./passenger-detail.component.scss'],
  templateUrl: './passenger-detail.component.html',
})
export class PassengerDetailComponent {
  @Input()
  detail: Passenger | null = null;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  onNameChange(value: string) {
    if (this.detail != null) this.detail.fullname = value;
  }

  toggleEdit() {
    if (this.editing) this.edit.emit(this.detail);
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
