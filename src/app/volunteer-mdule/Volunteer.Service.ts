import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { volunteer } from "../models/volunteer.model";


@Injectable()
export class VolunteerService {

isTrue:boolean | undefined;
  
GetAllVolunteerFromServer():Observable<volunteer[]>{
return this._http.get<volunteer[]>("/api/Volunteers");
}

getVolunteerByIdFromServer(id:number):Observable<volunteer>{
return this._http.get<volunteer>("/api/Volunteers/"+id);
}
     
saveVolunteerServer(volunteer: volunteer): Observable<boolean> {
return this._http.put<boolean>("/api/Volunteers", volunteer);
}

constructor(private _http: HttpClient) {}

}