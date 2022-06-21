import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { volunteer } from 'src/app/models/volunteer.model';
import { SchedulingService } from 'src/app/scheduling-module/Scheduling.service';
import { VolunteerService } from '../Volunteer.Service';

@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.scss']
})
export class VolunteerDetailsComponent implements OnInit {

  volunteerId: number | null = 0;
  v: volunteer = new volunteer();
  private vol: volunteer = new volunteer();

  formdetails: FormGroup = new FormGroup({
    "id": new FormControl("", [Validators.required, Validators.minLength(3)]),
    "name": new FormControl("", Validators.required),
    "tel": new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(7)]),
    "sunday": new FormControl(""),
    "monday": new FormControl(""),
    "tusday": new FormControl(""),
    "wensday": new FormControl(""),
    "thurhday": new FormControl(""),
    "friday": new FormControl("")

  });
  get volunteer() {
    return this.vol;
  }
  set volunteer(data: volunteer) {
    this.vol = data;
    if (this.vol) {
      this.formdetails.controls["id"].setValue(data.id);
      this.formdetails.controls["name"].setValue(data.name);
      this.formdetails.controls["tel"].setValue(data.tel);
      this.formdetails.controls["sunday"].setValue(data.days[0]);
      this.formdetails.controls["monday"].setValue(data.days[1]);
      this.formdetails.controls["tusday"].setValue(data.days[2]);
      this.formdetails.controls["wensday"].setValue(data.days[3]);
      this.formdetails.controls["thurhday"].setValue(data.days[4])
      this.formdetails.controls["friday"].setValue(data.days[5]);
    }
  }

  saveVolunteer() {
    if (this.vol != null) {
      if (this.formdetails?.valid) {
        this.vol.days[0] = this.formdetails.value.sunday;
        this.vol.days[1] = this.formdetails.value.monday;
        this.vol.days[2] = this.formdetails.value.tusday;
        this.vol.days[3] = this.formdetails.value.wensday;
        this.vol.days[4] = this.formdetails.value.thurhday;
        this.vol.days[5] = this.formdetails.value.friday;
        this.vol.name = this.formdetails.value.name;
        this.vol.id = this.formdetails.value.id;
        this.vol.tel = this.formdetails.value.tel;

        this._volunteerService.saveVolunteerServer(this.vol).subscribe(succses => {
          if (succses)
            this.Router.navigate(["/volunteers"]);
          else
            alert("you can't change the days, please ask your manager what to do!  thanks")
        })



      }
    }
  }

  constructor(private _activeR: ActivatedRoute, private _volunteerService: VolunteerService, private Router: Router, private _sch: SchedulingService) {
  }

  ngOnInit(): void {
    this._activeR.paramMap.subscribe(paramMap => {
      if (paramMap.get("vol")) {
        this.volunteerId = (Number)(paramMap.get("vol"));
        this._volunteerService.getVolunteerByIdFromServer(this.volunteerId)
          .subscribe(data => {
            this.volunteer = data;
          })
      }
    }
    );


  }
}