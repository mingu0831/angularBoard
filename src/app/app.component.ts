import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  num: number;
  boardList : any[];
  boardTitle : string;
  boardWriter : string;
  boardContent : string;
  writeForm : boolean;
  constructor() {
    this.num = 1;
    this.boardList = [{id: 1, title: 'Title1', writer: 'Writer1', content: 'Content1'}, 
    {id: 2, title: 'Title2', writer: 'Writer2', content: 'Content2'}];
    this.boardTitle = '';
    this.boardWriter = '';
    this.boardContent = '';
    this.writeForm = false;
  }
  showForm() {
    if(this.writeForm == false) {
      this.writeForm = true;
    } else {
      this.writeForm = false;
    }
  }

  addList() {
    let newId = this.boardList.length+1;

    this.boardList.push({id:newId, title:this.boardTitle, writer:this.boardWriter, content:this.boardContent});
    console.log(this.boardList);

    this.boardTitle = '';
    this.boardWriter = '';
    this.boardContent = '';
    this.showForm();
  }

  updateList(i:number) {
    
  }

  removeList(i:number) {    
    this.boardList.splice(i, 1);
  }
}
