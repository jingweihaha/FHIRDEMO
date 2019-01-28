import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
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
    debugger;
    if (this.service.medicationstatement) {
      debugger;
      let tmp_medicationstatements = this.service.medicationstatement.entry;
      console.log(tmp_medicationstatements);
      for (let i = 0; i < tmp_medicationstatements.length; i++) {
        debugger;
        let obj = {};
        try {
          let dosage = tmp_medicationstatements[i]["resource"]["dosage"][0];
          let text = dosage["text"];
          console.log("text is ", text);
          obj["dosage"] = text;
        } catch (error) {
          obj["dosage"] = "N/A";
        }
        let med;
        try {
          if (tmp_medicationstatements[i]["resource"]["medicationCodeableConcept"]) {
            med = tmp_medicationstatements[i]["resource"]["medicationCodeableConcept"];
          }
          else if (tmp_medicationstatements[i]["resource"]["medicationReference"]["display"]) {
            med = tmp_medicationstatements[i]["resource"]["medicationReference"]["display"];
          }
          console.log("med is ", med);
          console.log("end of loop medicationstatement component");
          obj["med"] = med["text"];
        } catch (error) {
          obj["med"] = "N/A"
        }
        this.medicationstatement.push(obj);
      }
      console.log("medicationstatement is medicationstatement component ", tmp_medicationstatements);
      this.cd.markForCheck();
      
      debugger;

      this.displayedColumns = ["dosage", "med"];
      this.dataSource = new MatTableDataSource<{}>(this.medicationstatement);
    }
  }

  ngOnInit() {

  }

}
