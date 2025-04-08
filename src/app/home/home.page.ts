import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contact = {
    Name:"Mounass",
    Email:"monassedia@gmail.com",
    Tel: "770000000",
    Logo:"assets/logo.png",
    Location:"assets/local.png",
  }

  constructor() {}

}
