import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { MedicationstatementComponent } from './medicationstatement/medicationstatement.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  
  { path: 'patient', component: PatientComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'medicationstatement', component: MedicationstatementComponent },
  { path: 'tables', component: TablesComponent }
  // { path: '**', component: HeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
