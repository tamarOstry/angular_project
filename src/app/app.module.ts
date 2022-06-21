import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VolunteerService } from './volunteer-mdule/Volunteer.Service';
import { VolunteerListComponent } from './volunteer-mdule/volunteer-list/volunteer-list.component';
import { SchedulingComponent} from './scheduling-module/scheduling/scheduling.component'
import { VolunteerDetailsComponent } from './volunteer-mdule/volunteer-details/volunteer-details.component';
import { Route,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { SchedulingService } from './scheduling-module/Scheduling.service';
import { SchedulingModuleModule } from './scheduling-module/scheduling-module.module';

const APP_ROUTES: Route[] = [
  { path: "volunteers", component: VolunteerListComponent },
  { path: "Scheduling", component: SchedulingComponent },
  { path: "details/:vol", component: VolunteerDetailsComponent },
  { path:"app",component:AppComponent}
  // { path: "**", component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    VolunteerListComponent,
    VolunteerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
    CommonModule,
    SchedulingModuleModule
  ],
  providers: [VolunteerService,SchedulingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
