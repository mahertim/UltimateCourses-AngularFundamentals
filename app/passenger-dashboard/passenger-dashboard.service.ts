import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Passenger } from './models/passenger.interface';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {
    console.log(this.http);
  }

  getPassengers(): Passenger[] {
    return [
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
}
