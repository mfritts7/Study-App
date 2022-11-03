import { Component, OnInit } from '@angular/core';
import { List } from './List';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  //Form Control
  noteInput : FormGroup

  placeHolder = 'Enter Note Here'

today = new Date().toLocaleDateString()
notes:List = {"date":this.today,"list":["Sample Note"]}
newNote:List
  constructor() { }

  ngOnInit(): void {
  console.log(this.today)
  this.noteInput = new FormGroup({
    note: new FormControl('')
  })


}
  
  pushItem(){
  // this.notes = {"date":"","list":["dfgdfg","ddfhdfh"]}
  this.notes.list.push('added')
  }
  
  addNote(){
  console.log("yolo")
  this.notes.list.push("Note"+ (this.notes.list.length+1))
  }
  addNewNote(){
    this.notes.list.push(this.noteInput.value.note)
    this.noteInput.reset
  }
  
  removeNote(index : number){
    this.notes.list.splice(index,1)
    console.log("removed")
  }

  myStyle = {
    width: '100%'
  }

}
