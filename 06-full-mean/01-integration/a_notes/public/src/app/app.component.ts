import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from './note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anonymous Notes';
  note = {
    "content": ''
  }
  errors = {};
  notes = [];
  @Output() sendNoteToList = new EventEmitter();

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
    this.getNotes()
  }



  createNote(){
    let observable = this._noteService.createNote(this.note);
    observable.subscribe(data => {
      console.log("created", data);
      if(data['status'] == "fail"){
        this.errors = data['errors']['errors'];
      } else {
        this.note = {
          "content": ''
        }
        this.getNotes();
      }
    });
  }
  getNotes(){
    let observable = this._noteService.getNotes();
    observable.subscribe(data => {
      console.log("get notes", data);
      this.notes = data['notes'];
    })
  }
  deleteNote(id){
    let observable = this._noteService.deleteNote(id);
    observable.subscribe( data => {
      console.log("Delete")
      this.getNotes();
    })
  }

}
