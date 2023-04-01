import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './home/home.component';
import { BlankHeaderComponent } from './layouts/blank-header/blank-header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { StarRatingComponent } from './component/star-rating/star-rating.component';
import { TranslateComponent } from './translate/translate.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    HeaderComponent,
    HomeComponent,
    BlankHeaderComponent,
    UserListComponent,
    UserDetailsComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    StarRatingComponent,
    TranslateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
    }),
    BrowserAnimationsModule, // required animations module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
