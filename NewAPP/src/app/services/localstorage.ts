import { Injectable } from '@angular/core';
import { curdtbl } from '../models/curdtbl';
@Injectable({
  providedIn: 'root'
})
export class Localstorage {
  
  private storagekey ='crud-app';
  constructor(){}

  getItems():curdtbl[]{
    const items = localStorage.getItem(this.storagekey);
    return items ? JSON.parse(items) as curdtbl[] :[];
  }

  addItems(item:curdtbl):void{
   const items = this.getItems();
   items.push(item);
   localStorage.setItem(this.storagekey,JSON.stringify(items));

  }
  generateId():number{
    const items = this.getItems();
    return items.length >0 ?
    Math.max(...items.map(i=>i.TopicId))+1 :1;
  }
  updateItem(updated:curdtbl):void{
    const items = this.getItems();
    const existingitem = items.findIndex(i =>i.TopicId===updated.TopicId);
    if(existingitem !== -1){
      items[existingitem]=updated;
      localStorage.setItem(this.storagekey,JSON.stringify(items));

    }
  }
  deleteItem(id:number):void{
    const items = this.getItems().filter(i=>i.TopicId !=id);
    localStorage.setItem(this.storagekey,JSON.stringify(items));
  }
}
 