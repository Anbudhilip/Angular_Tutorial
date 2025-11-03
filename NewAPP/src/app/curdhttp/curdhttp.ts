
import { Component, OnInit } from '@angular/core';
import{Post} from '../models/curdtbl';
import { Observable } from 'rxjs';
import { AngularTopics } from '../services/angular-topics';
import { error } from 'console';
import {Express} from 'express';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Edit } from './edit/edit';
import { Create } from './create/create';
import { Route } from '@angular/router';

@Component({
  selector: 'app-curdhttp',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './curdhttp.html',
  styleUrl: './curdhttp.css'
})
export class CURDHTTP implements OnInit {
 posts:Post[] =[];

constructor (public angularTopic :AngularTopics ){}

  ngOnInit(): void {
    this.angularTopic.getAll().subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.posts = JSON.parse(response.data);
        }
        else {
          alert(response.message);
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
