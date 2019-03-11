import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {

  public posts = [];
  constructor(private dataService: DataService) { 
    dataService.getData().subscribe(data => {
      console.log(data);
      this.posts = data;
    })
  }

  ngOnInit() {
  }

}