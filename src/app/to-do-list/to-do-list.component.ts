import { Component, OnInit } from '@angular/core';
import { List } from './List';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

today = new Date().toLocaleDateString()
notes:List = {"date":this.today,"list":["note1","note2","note3"]}
  constructor() { }

  ngOnInit(): void {
  console.log(this.today)
  }
  
  pushItem(){
  // this.notes = {"date":"","list":["dfgdfg","ddfhdfh"]}
  this.notes.list.push('added')
  }
  
  addNote(){
  console.log("yolo")
  this.notes.list.push("Note"+ (this.notes.list.length+1))
  }
  
  removeNote(index : number){
    this.notes.list.splice(index,1)
    console.log("removed")
  }

}
