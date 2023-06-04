import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { filter, map } from 'rxjs';
import { News } from '../shared/News';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  allNews: any = [];
  activeTag:string = 'allNews'


  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.getAllNews();
  }

  changeTag(currentTag:string){
    this.activeTag = currentTag;
    this.serverService.getAllNews().pipe(
      map (item => Object.values(item)),
    ).subscribe(d => {
      this.allNews = d.filter(d => d.tag === currentTag)
    })
  }

  getAllNews(){
    this.serverService.getAllNews().pipe(map(
      item => Object.values(item)
    )).subscribe(d => this.allNews = d);
    this.activeTag = 'allNews';

  }

}
