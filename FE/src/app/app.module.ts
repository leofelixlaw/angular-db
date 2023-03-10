import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './home/home.component';
import { BlankHeaderComponent } from './layouts/blank-header/blank-header.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    HeaderComponent,
    HomeComponent,
    BlankHeaderComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
