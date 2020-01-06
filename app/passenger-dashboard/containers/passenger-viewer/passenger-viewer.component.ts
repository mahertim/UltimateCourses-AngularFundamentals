import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  templateUrl: 'passenger-viewer.component.html',
})
export class PassengerViewerContainer implements OnInit {
  passenger: Passenger | null = null;

  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit() {
    this.passengerService
      .getPassenger(1)
      .subscribe((data: Passenger) => (this.passenger = data));
  }

  onUpdatePassenger(event: Passenger): void {
    this.passengerService
      .updatePassenger(event)
      .subscribe(
        () => (this.passenger = Object.assign({}, this.passenger, event)),
      );
  }
}
