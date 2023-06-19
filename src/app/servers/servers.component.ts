import { Component } from '@angular/core';

@Component({
  // selector by tags:
  // selector: 'app-servers',

  // selector by atribute:
  // selector: '[app-servers]',

  // selector by class:
  selector: '.app-servers',

  // selector by id it's not supported

  // only use the template like this if you have untill 3 lines of code
  // template: `<app-server></app-server> <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }
}
