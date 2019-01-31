import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointment = [];
  dataSource: MatTableDataSource<{}>;
  displayedColumns: any;

  constructor(private service: SharedService, private cd: ChangeDetectorRef) {
    if (this.service.appointment) {
      let tmp_appointment = this.service.appointment["entry"];

      if (tmp_appointment) {
        for (let i = 0; i < tmp_appointment.length; i++) {
          let obj = {};
          try {
            let text = tmp_appointment[i]["resource"]["status"];
            obj["status"] = text != null ? text : "N/A";
          } catch (error) {
            obj["status"] = "N/A";
          }

          let description;
          let start;
          let end;

          try {
            if (tmp_appointment[i]["resource"]["description"]) {
              description = tmp_appointment[i]["resource"]["description"];
            }
            obj["description"] = description != null ? description : "N/A";
          } catch (error) {
            obj["description"] = "N/A";
          }

          try {
            if (tmp_appointment[i]["resource"]["start"]) {
              start = tmp_appointment[i]["resource"]["start"];
            }
            obj["start"] = start != null ? start : "N/A";
          } catch (error) {
            obj["start"] = "N/A";
          }

          try {
            if (tmp_appointment[i]["resource"]["end"]) {
              end = tmp_appointment[i]["resource"]["end"];
            }
            obj["end"] = end != null ? end : "N/A";
          } catch (error) {
            obj["end"] = "N/A";
          }
          this.appointment.push(obj);
        }
        this.cd.markForCheck();
        this.displayedColumns = ["status", "description", "start"];
        this.dataSource = new MatTableDataSource<{}>(this.appointment);
      }
    }
  }

  ngOnInit() {

  }

}
