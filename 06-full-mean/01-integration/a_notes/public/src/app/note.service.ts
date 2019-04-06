import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private _http: HttpClient) {

  }
  getNotes(){
    return this._http.get('/notes');
  }

  createNote(newNote){
    return this._http.post('/notes', newNote);
  }

  deleteNote(id){
    return this._http.delete(`/notes/${id}`);
  }
}
