import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class EncounterComponent implements OnInit {

  encounter =[];
  dataSource: MatTableDataSource<{}>;
  displayedColumns: any;

  constructor(private service: SharedService, private cd: ChangeDetectorRef) {
    //debugger;
    if (this.service.encounter) {
      //debugger;
      let tmp_encounter = this.service.encounter["entry"];
      //console.log(tmp_encounter);

      if(tmp_encounter)
      {
        for (let i = 0; i < tmp_encounter.length; i++) {
          //debugger;
          let obj = {};
          try {
            let type = tmp_encounter[i]["resource"]["type"][0];
            let text = type["text"];
            //console.log("text is ", text);
            obj["type"] = text!= ""?text:"N/A";
          } catch (error) {
            obj["type"] = "N/A";
          }

          let start;

          let end;

          try {
            if (tmp_encounter[i]["resource"]["period"]["start"]) {
              start = tmp_encounter[i]["resource"]["period"]["start"];
            }
            //console.log("start is ", start);
            obj["start"] = start!= null?start:"N/A";
          } catch (error) {
            obj["start"] = "N/A";
          }

          try {
            if (tmp_encounter[i]["resource"]["period"]["end"]) {
                end = tmp_encounter[i]["resource"]["period"]["end"];
            }
            obj["end"] = end!= null?end:"N/A";
            //console.log("end is", end);
          } catch (error) {
            obj["end"] = "N/A";
          }
          this.encounter.push(obj);
        }

        this.cd.markForCheck();
        //debugger;  
        this.displayedColumns = ["type", "start", "end"];
        this.dataSource = new MatTableDataSource<{}>(this.encounter);
      }
    }
  }

  ngOnInit() {

  }
}
