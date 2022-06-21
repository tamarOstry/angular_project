import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { VolunteerDetailsComponent } from './volunteer-details/volunteer-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VolunteerListComponent,
    VolunteerDetailsComponent,FormGroup
  ],
  imports: [
    CommonModule,BrowserModule,RouterModule,ReactiveFormsModule
  ]
})
export class VolunteerMduleModule { }
