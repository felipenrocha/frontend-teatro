import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    MatIconModule,
    MatDividerModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
