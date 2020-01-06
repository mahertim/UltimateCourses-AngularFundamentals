import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  templateUrl: 'passenger-viewer.component.html',
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService,
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((data: Params) =>
        this.passengerService.getPassenger((data as Passenger).id),
      )
      .subscribe((data: Passenger) => (this.passenger = data));
  }

  onUpdatePassenger(event: Passenger): void {
    this.passengerService
      .updatePassenger(event)
      .subscribe(
        () => (this.passenger = Object.assign({}, this.passenger, event)),
      );
  }

  goBack() {
    this.router.navigate(['/passengers']);
  }
}
