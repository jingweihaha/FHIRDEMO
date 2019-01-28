import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PatientComponent } from './patient/patient.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import {MatTableModule, MatCardModule, MatButtonModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { MedicationstatementComponent } from './medicationstatement/medicationstatement.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TablesComponent } from './tables/tables.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    SearchBarComponent,
    DetailComponent,
    HeaderComponent,
    MedicationstatementComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
