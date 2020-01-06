import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  templateUrl: 'passenger-dashboard.component.html',
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[] = [];

  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit() {
    this.passengerService
      .getPassengers()
      .then((data: Passenger[]) => (this.passengers = data));
  }

  handleEdit(event: Passenger) {
    this.passengerService.updatePassenger(event).then((data: Passenger) => {
      this.passengers = this.passengers.map((passenger: Passenger) => {
        if (passenger.id === data.id) {
          passenger = Object.assign({}, passenger, data);
        }
        return passenger;
      });
    });
  }

  handleRemove(event: Passenger) {
    this.passengerService.removePassenger(event).then(() => {
      this.passengers = this.passengers.filter((passenger: Passenger) => {
        return passenger.id !== event.id;
      });
    });
  }
}
