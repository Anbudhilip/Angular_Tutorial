import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/curdtbl';
import {AngularTopics} from '../../services/angular-topics';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  imports: [CommonModule,ReactiveFormsModule],
  standalone:true,
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})
export class Edit {
  topicId? :number;
}
