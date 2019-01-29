import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SharedService } from '../shared.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-medicationstatement',
  templateUrl: './medicationstatement.component.html',
  styleUrls: ['./medicationstatement.component.css']
})
export class MedicationstatementComponent implements OnInit {

  medicationstatement =[];
  dataSource: MatTableDataSource<{}>;
  displayedColumns: any;

  constructor(private service: SharedService, private cd: ChangeDetectorRef) {
    if (this.service.medicationstatement && this.service.medicationstatement.entry && (this.service.medicationstatement.entry.length > 0)) {
      let tmp_medicationstatements = this.service.medicationstatement.entry;
      for (let i = 0; i < tmp_medicationstatements.length; i++) {
        let obj = {};
        try {
          let dosage = tmp_medicationstatements[i]["resource"]["dosage"][0];
          let text = dosage["text"];
          obj["dosage"] = text;
        } catch (error) {
          obj["dosage"] = "N/A";
        }
        let med;
        try {
          debugger;
          if (tmp_medicationstatements[i]["resource"]["medicationCodeableConcept"]) {
            med = tmp_medicationstatements[i]["resource"]["medicationCodeableConcept"];
            obj["med"] = med["text"] != ""?med["text"]:"N/A";

          }
          else if (tmp_medicationstatements[i]["resource"]["medicationReference"]["display"]) {
            med = tmp_medicationstatements[i]["resource"]["medicationReference"]["display"];
            obj["med"] = med != ""?med:"N/A";
          }          
        } catch (error) {
          obj["med"] = "N/A"
        }
        this.medicationstatement.push(obj);
      }
      this.cd.markForCheck();
      this.displayedColumns = ["med", "dosage"];
      this.dataSource = new MatTableDataSource<{}>(this.medicationstatement);
    }
  }

  ngOnInit() {

  }
}
