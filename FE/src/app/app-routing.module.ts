import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlankHeaderComponent } from './layouts/blank-header/blank-header.component';
import { FullComponent } from './layouts/full/full.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'users',
        component: UserListComponent,
      },
      {
        path: 'add-new',
        component: UserDetailsComponent,
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
