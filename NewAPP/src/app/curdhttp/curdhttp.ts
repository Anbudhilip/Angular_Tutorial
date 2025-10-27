
import { Component, OnInit } from '@angular/core';
import{Post} from '../models/curdtbl';
import { Observable } from 'rxjs';
import { AngularTopics } from '../services/angular-topics';

@Component({
  selector: 'app-curdhttp',
  imports: [],
  templateUrl: './curdhttp.html',
  styleUrl: './curdhttp.css'
})
export class CURDHTTP implements OnInit {
 posts:Post[] =[];

constructor (public angularTopic :AngularTopics ){}

ngOnInit():void{
  this.angularTopic.getAll().subscribe((data:Post[])=>{
    this.posts = data;
    console.log(this.posts);
  })
}
}
