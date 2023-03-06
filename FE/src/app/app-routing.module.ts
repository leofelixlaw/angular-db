import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlankHeaderComponent } from './layouts/blank-header/blank-header.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('./users/users-routing.module').then(m => m.UsersRoutingModule)
      }
    ]
  },
  {
    path: '',
    component: BlankHeaderComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
