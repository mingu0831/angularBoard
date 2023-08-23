import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
  updatingForm : boolean;
  updatingFormArr : any[];

  writingForm = this.fb.group({
    boardTitle : ['', Validators.required],
    boardWriter : ['', Validators.required],
    boardContent : ['', Validators.required]
  })

  constructor(private fb: FormBuilder) {
    this.num = 1;
    this.boardList = [{id: 1, title: 'Title1', writer: 'Writer1', content: 'Content1'}, 
    {id: 2, title: 'Title2', writer: 'Writer2', content: 'Content2'}];
    this.boardTitle = '';
    this.boardWriter = '';
    this.boardContent = '';
    this.writeForm = false;
    this.updatingForm = false;
    this.updatingFormArr = [{id:1, condition:false}, {id:2, condition:false}];
  }

  showWriteForm() {
    if(this.writeForm == false) {
      this.writeForm = true;
    } else {
      this.writeForm = false;
    }
  }

  showUpdateForm(i:number) {
    if(this.updatingFormArr[i].condition == false) {
      this.updatingFormArr[i].condition = true
    } else {
      this.updatingFormArr[i].condition = false;
    }
  }

  getCondition(i:number) {
    return this.updatingFormArr[i].condition;
  }

  addList() {
    let newId = this.boardList.length+1;

    if(this.boardTitle.trim() == '') {
      alert('제목을 입력해주세요')
    }

    if(this.boardWriter.trim() == '') {
      alert('작성자를 입력해주세요')
    }

    if(this.boardTitle.trim() == '') {
      alert('내용을 입력해주세요')
    }

    this.boardList.push({id:newId, title:this.boardTitle, writer:this.boardWriter, content:this.boardContent});
    this.updatingFormArr.push({id:newId, condition:false});

    this.boardTitle = '';
    this.boardWriter = '';
    this.boardContent = '';
    this.showWriteForm();
  }

  updateList(i:number) {
    this.boardList[0].title = this.boardTitle;
    this.boardList[0].writer = this.boardWriter;
    this.boardList[0].content = this.boardContent;

    this.boardTitle = '';
    this.boardWriter = '';
    this.boardContent = '';
    this.showUpdateForm(i);
  }

  removeList(i:number) {    
    this.boardList.splice(i, 1);
  }
}
