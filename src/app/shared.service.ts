import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public mysub = new Subject<any>();
  public ds_detactor = new Subject<any>();
  
  public flag = true;
  public ds = [];
  public patient_detail:any;
  public medicationstatement:any;

  
  constructor() { }
}
