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
  nodata: boolean;

  constructor(private service: SharedService, private cd: ChangeDetectorRef) {
    if (this.service.encounter) {
      let tmp_encounter = this.service.encounter["entry"];
      if(tmp_encounter && tmp_encounter.length > 0 )
      {
        for (let i = 0; i < tmp_encounter.length; i++) {
          let obj = {};
          try {
            let type = tmp_encounter[i]["resource"]["type"][0];
            let text = type["text"];
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
            obj["start"] = start!= null?start:"N/A";

          } catch (error) {
            obj["start"] = "N/A";
          }

          try {
            if (tmp_encounter[i]["resource"]["period"]["end"]) {
                end = tmp_encounter[i]["resource"]["period"]["end"];
            }
            obj["end"] = end!= null?end:"N/A";
          } catch (error) {
            obj["end"] = "N/A";
          }
          this.encounter.push(obj);
        }

        this.encounter.sort((a:any, b:any) => {
          if (a["start"].toLowerCase() < b["start"].toLowerCase()) {
            return 1;
          } else if (a["start"].toLowerCase() > b["start"].toLowerCase()) {
            return -1;
          } 
          else {
            return 0;
          }
        });

        this.cd.markForCheck();
        this.displayedColumns = ["type", "start", "end"];
        this.dataSource = new MatTableDataSource<{}>(this.encounter);
      }
      else{
        this.nodata = true;
      }
    }
  }

  ngOnInit() {

  }
}
