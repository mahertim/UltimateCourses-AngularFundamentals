import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick()">
        Change Name
      </button>
      <input
        type="text"
        [value]="name"
        (input)="handleInput($event)"
        (blur)="handleBlur($event)"
      />
      <div>{{ name }}</div>
    </div>
  `,
})
export class AppComponent {
  name: string = 'Todd';
  handleClick() {
    this.name = 'Motto';
  }
  handleBlur(event: { target: { value: string } }) {
    this.name = event.target.value;
  }
  handleInput(event: { target: { value: string } }) {
    this.name = event.target.value;
  }
}
