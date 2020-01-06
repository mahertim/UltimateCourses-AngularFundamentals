import {
  Component,
  OnChanges,
  OnInit,
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
export class PassengerDetailComponent implements OnChanges, OnInit {
  @Input()
  detail: Passenger | null = null;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  constructor() {}

  ngOnChanges(changes: any) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

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
