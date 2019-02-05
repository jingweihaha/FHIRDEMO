import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public mysub = new Subject<any>();
  public ds_detector = new Subject<any>();

  public flag = true;
  public ds = [];
  public patient_detail:any;
  public medicationstatement:any;
  encounter: any;
  condition: any;
  procedure: any;
  appointment: any;
  allergyIntolerance: any;
  //current patient
  banner: any;
  banner_msg = new BehaviorSubject<any>(1);
  med_msg = new BehaviorSubject<any>(1);  
  appointment_msg = new BehaviorSubject<any>(1);  
  condition_msg = new BehaviorSubject<any>(1);  
  procedure_msg = new BehaviorSubject<any>(1);
  allergy_msg = new BehaviorSubject<any>(1);
  
  constructor() { }
}
