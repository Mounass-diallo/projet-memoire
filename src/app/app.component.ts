import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
  private router: Router,
  private authService:AuthentificationService
  ) {
    let authenticated=this.authService.loadToken();
    if(authenticated){
      this.router.navigateByUrl('/menu/home');
    }
    else{
    this.router.navigateByUrl('/login');
   }
}
}
