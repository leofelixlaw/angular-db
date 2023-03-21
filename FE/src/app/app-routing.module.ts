import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlankHeaderComponent } from './layouts/blank-header/blank-header.component';
import { FullComponent } from './layouts/full/full.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'users',
    component: FullComponent,
    children: [
      {
        path: 'list',
        component: UserListComponent
      },
      {
        path: 'add-new',
        component: UserDetailsComponent,
      },
      {
        path: 'edit/:id',
        component: UserDetailsComponent,
      }
    ]
  },
  {
    path: 'products',
    component: BlankHeaderComponent,
    children: [
      {
        path: 'list',
        component:ProductListComponent
      },
      {
        path: 'details/:id',
        component: ProductDetailsComponent,
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
