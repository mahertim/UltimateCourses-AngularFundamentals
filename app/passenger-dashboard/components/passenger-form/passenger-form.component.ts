import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  templateUrl: 'passenger-form.component.html',
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger | null = null;

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: Baggage[] = [
    {
      key: 'none',
      value: 'No baggage',
    },
    {
      key: 'hand-only',
      value: 'Hand baggage',
    },
    {
      key: 'hold-only',
      value: 'Hold baggage',
    },
    {
      key: 'hand-hold',
      value: 'Hand and hold baggage',
    },
  ];

  constructor() {}

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn && this.detail) {
      this.detail.checkedInDate = Date.now();
    }
  }

  handleSubmit(passenger: Passenger, isValid: boolean): void {
    if (isValid) {
      this.update.emit(passenger);
    }
  }
}
