import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService:AuthentificationService,
    private router:Router
   ) { }

  ngOnInit() {
  }
 onLogin(user){
   let res=this.authService.login(user.username,user.password);
   if(res==true){
    this.router.navigateByUrl( '/menu/home');
   }
   else{
    this.router.navigateByUrl('login');
   }
 }