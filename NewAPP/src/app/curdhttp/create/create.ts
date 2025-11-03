import { Component,inject,OnInit } from '@angular/core';
import { Post } from '../../models/curdtbl';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AngularTopics} from '../../services/angular-topics'
import { response } from 'express';
import { error } from 'console';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class Create implements OnInit {

  private  router = inject(Router);
  private route = inject(ActivatedRoute);
  constructor(public angulartopicService :AngularTopics ){}

  PostFrom!:FormGroup;
  ngOnInit(): void {
    this.PostFrom = new FormGroup({
      id:new FormControl(null),
      topic:new FormControl('',[Validators.required,Validators.minLength(5)]),
      question: new FormControl('',Validators.required),
      answer:new FormControl('',Validators.required),
    });
  }
  onSubmit(){
    if(this.PostFrom.valid){
      const newPost:Post = this.PostFrom.value;
      newPost.Id=0;
      const PostList:Post[] =[newPost];
      console.log(newPost);
      this.angulartopicService.create(PostList).subscribe({
        next :(response)=>{
          if(response.isSuccess){
            alert("New Angular Topic Created Succesfully");
          }else{
             alert("Unable to Create Angular Topic");
          }
        },error:(error)=>{
          alert(error);
        }
      })
    }else{
      alert("Invalid Form");
    }
  }
  cancel(){
    this.PostFrom.clearValidators();
    this.router.navigate(['..'],{relativeTo:this.route}) //navigate to parent route
    
  }
}
