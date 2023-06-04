import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { NgForm } from '@angular/forms';
import { News } from '../shared/News';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.scss']
})
export class AddnewsComponent implements OnInit {

  title: string = '';
  tag: string = '';


  constructor(private serverService: ServerService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addNews(addNewsForm: NgForm) {
    let newNews: News = {
      id: (Math.floor(Math.random() * 1000) + 1).toString(),
      title: addNewsForm.value.title.trim(),
      content: addNewsForm.value.content,
      tag: addNewsForm.value.tag,
    }
    this.serverService.addNews(newNews).subscribe(d => console.log(d));
    this.openSnackBar();
    addNewsForm.reset()
  }

  openSnackBar(){
    this.snackBar.open('News is successfully added to the database', '', {
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

  





}
