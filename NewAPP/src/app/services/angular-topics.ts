import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,throwError,map,BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class AngularTopics {
  
  constructor(private http:HttpClient,)
}
