import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup } from '@angular/forms';
import {curdtbl} from '../models/curdtbl';
import { Localstorage } from '../services/localstorage';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-curd',
  imports: [FormsModule],
  templateUrl: './curd.html',
  styleUrl: './curd.css'
})
export class CURD implements OnInit{
 @Input() item :curdtbl = {TopicId:0,TopicName:'',TopicDefinition:'', WhyItsNeed:'',RealTimeUse:'',CreatedOn:'',RefId:0};
 @Output() formSubmit = new EventEmitter<void>();

 constructor(private storage:Localstorage){}
 items:curdtbl[]=[];
 ngOnInit(): void {
   this.loadItems();
 }
 loadItems():void{
  this.items=this.storage.getItems();
 }
 onSubmit():void{
  debugger;
  if(this.item.TopicId ===0){
    this.item.TopicId = this.storage.generateId();
    this.storage.addItems(this.item);
  }else{
    this.storage.updateItem(this.item);
  }
  this.formSubmit.emit();
  this.item ={TopicId:0,TopicName:'',TopicDefinition:'', WhyItsNeed:'',RealTimeUse:'',CreatedOn:'',RefId:0};
  this.loadItems();
 }
 onEdit(obj : curdtbl):void{
  debugger;
   this.item = { ...obj };
 };
 onDelete(id :number):void{
    this.storage.deleteItem(id);
    this.loadItems();
 };
}
