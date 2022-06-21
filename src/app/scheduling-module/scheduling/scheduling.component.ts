import { Component, OnInit } from '@angular/core';
import { volunteer } from 'src/app/models/volunteer.model';
import { SchedulingService } from '../Scheduling.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss']
})

export class SchedulingComponent implements OnInit {

daysTrueOfVolunteers: (volunteer[])[]=[];
_scheduling:string[]=[];

get scheduling(){
  return this._scheduling;
}

set scheduling(data:string[]){
  this._scheduling=data;
      if(this.scheduling){       
        this.schedulingForm.controls["sunday"].setValue(data[0]);
        this.schedulingForm.controls["monday"].setValue(data[1]);
        this.schedulingForm.controls["tusday"].setValue(data[2]);
        this.schedulingForm.controls["wensday"].setValue(data[3]);
        this.schedulingForm.controls["thurhday"].setValue(data[4])
        this.schedulingForm.controls["friday"].setValue(data[5]);
      }
}

schedulingForm: FormGroup = new FormGroup({
  "sunday": new FormControl(""),
  "monday": new FormControl(""),
  "tusday": new FormControl(""),
  "wensday": new FormControl(""),
  "thurhday": new FormControl(""),
  "friday": new FormControl("")
  
});

  saveScheduling(){
    var sched:string[]=[]
    sched[0]=this.schedulingForm.value.sunday;
    sched[1]=this.schedulingForm.value.monday;
    sched[2]=this.schedulingForm.value.tusday;
    sched[3]=this.schedulingForm.value.wensday;
    sched[4]=this.schedulingForm.value.thurhday;
    sched[5]=this.schedulingForm.value.friday;
    this.schedulingService.saveSchedulingToServer(sched)
    .subscribe(data=>
      {
        if(data)
        alert("succsess to save the scheduling")
        else
           alert("you have error!!")
      }  
  );
  }

  constructor(private schedulingService:SchedulingService,private Router:Router) {}

  ngOnInit(): void {
      this.schedulingService.getAllListsVfromServer().subscribe(data=>{       
      this.daysTrueOfVolunteers=data;
    });
    this.schedulingService.getScheduling().subscribe(data=>{
      this.scheduling=data;
    })
    }
  

}


