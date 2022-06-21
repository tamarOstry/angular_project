import { Component, OnInit } from '@angular/core';
import { volunteer } from 'src/app/models/volunteer.model';
import {VolunteerService} from '../Volunteer.Service'

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.scss']
})
export class VolunteerListComponent implements OnInit {

  volunteersList: volunteer[] = [];

  
  constructor(private _volunteerService: VolunteerService) {
    this._volunteerService.GetAllVolunteerFromServer().subscribe(data=>{
      this.volunteersList=data;
     });
   }

  ngOnInit(): void {
  }

}
