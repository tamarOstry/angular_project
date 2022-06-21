import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { volunteer } from "../models/volunteer.model";
import { VolunteerService } from "../volunteer-mdule/Volunteer.Service";

@Injectable()
export class SchedulingService {
    
   getAllListsVfromServer():Observable<volunteer[][]>{
    return this._http.get<volunteer[][]>("/api/scheduling");
   }
    
   saveSchedulingToServer(schedulingToSave:string[]){
    return this._http.put<boolean>("/api/scheduling",schedulingToSave);
   }

   getScheduling():Observable<string[]> { 
    return this._http.get<string[]>("/api/scheduling/GetScheduling");
   }
    
  constructor(private _VolunteerService: VolunteerService,private _http:HttpClient) {}

}
