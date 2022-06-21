import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { SchedulingService } from './Scheduling.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SchedulingComponent
  ],
  imports: [
    CommonModule,HttpClientModule, BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers:[SchedulingService]
})
export class SchedulingModuleModule { }
