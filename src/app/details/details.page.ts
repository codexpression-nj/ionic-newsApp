import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  author : any
  content: any
  description: any
  publishedAt: any
  url: any
  title: any
  image: any
  source: any

  constructor(private router:Router,private routes:ActivatedRoute) { }

  ngOnInit() {

    this.author = this.routes.snapshot.queryParamMap.get('author')
    this.content = this.routes.snapshot.queryParamMap.get('content')
    this.description = this.routes.snapshot.queryParamMap.get('description')
    this.publishedAt = this.routes.snapshot.queryParamMap.get('publishedAt')
    this.url = this.routes.snapshot.queryParamMap.get('url')
    this.title = this.routes.snapshot.queryParamMap.get('title')
    this.image = this.routes.snapshot.queryParamMap.get('image')
    this.source = this.routes.snapshot.queryParamMap.get('source')

    console.log(this.source);
    
  }

}
