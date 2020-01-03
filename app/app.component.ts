import { Component } from '@angular/core';

interface Child {
  name: string;
  age: number;
}

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkedInDate?: number;
  children?: Child[];
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  passengers: Passenger[] = [
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
