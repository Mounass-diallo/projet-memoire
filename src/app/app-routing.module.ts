import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'menu/home',
    pathMatch: 'full'
  },
  {
    path: 'menu/home',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
{
  path: 'login',
  loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
},
{
  path: 'menu/meteo',
  loadChildren: () => import('./meteo/meteo.module').then( m => m.MeteoPageModule)
},
{
  path: 'menu/gallery',
  loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
},
{
  path: 'menu/locations',
  loadChildren: () => import('./locations/locations.module').then( m => m.LocationsPageModule)
},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
