import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  templateUrl: 'passenger-dashboard.component.html',
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[] = [];

  constructor() {}

  ngOnInit() {
    this.passengers = [
      {
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkedInDate: 1490742000000,
      },
      {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        children: [
          { name: 'Ted', age: 12 },
          { name: 'Chloe', age: 7 },
        ],
      },
      {
        id: 3,
        fullname: 'James',
        checkedIn: true,
        checkedInDate: 1490742000000,
      },
      {
        id: 4,
        fullname: 'Louise',
        checkedIn: true,
        checkedInDate: 1490742000000,
        children: [{ name: 'Jessica', age: 12 }],
      },
      {
        id: 5,
        fullname: 'Tina',
        checkedIn: false,
      },
    ];
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }
}
