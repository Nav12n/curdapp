import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  name:string="navin";
  apiurl: string = "https://localhost:3000";
  constructor(private http:HttpClient){}
   
}
