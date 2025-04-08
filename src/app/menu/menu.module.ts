import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    component: MenuPage, 
    children :[
      {
        path: 'menu/home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'menu/meteo',
        loadChildren: () => import('../meteo/meteo.module').then( m => m.MeteoPageModule)
      },
      {
        path: 'menu/gallery',
        loadChildren: () => import('../gallery/gallery.module').then( m => m.GalleryPageModule)
      },
      {
        path: 'menu/locations',
        loadChildren: () => import('../locations/locations.module').then( m => m.LocationsPageModule)
   },
   ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage] 
})
export class MenuPageModule {}