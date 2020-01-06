import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['./passenger-detail.component.scss'],
  templateUrl: './passenger-detail.component.html',
})
export class PassengerDetailComponent implements OnChanges {
  @Input()
  detail: Passenger | null = null;

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  editing: boolean = false;

  constructor() {}

  ngOnChanges(changes: any) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  onNameChange(value: string) {
    if (this.detail != null) this.detail.fullname = value;
  }

  toggleEdit() {
    if (this.editing && this.detail) this.edit.emit(this.detail);
    this.editing = !this.editing;
  }

  onRemove() {
    if (this.detail) this.remove.emit(this.detail);
  }

  goToPassenger() {
    if (this.detail) this.view.emit(this.detail);
  }
}
