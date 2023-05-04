import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NewsArticlesService } from '../api/news-articles.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  topHeadlines = []
  categories = ["business", "entertainment", "general", "science", "sport", "technology"]
  articlesPerCategory = []
  selectedCategory = this.categories[0]

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1.2
  };

  constructor(private articleService: NewsArticlesService,private router:Router) {
    articleService.getTopHeadlines().subscribe((results) => {

      this.topHeadlines.push(...results.articles)
      console.log(this.topHeadlines);

    })

    articleService.getArticleByCategory(this.selectedCategory).subscribe((results) => {
      // console.log(results);
      this.articlesPerCategory = results['articles']

    })
  }

  onCategoryChange(ev: any) {
    this.selectedCategory = ev['detail'].value
    this.articleService.getArticleByCategory(this.selectedCategory).subscribe((results) => {
      this.articlesPerCategory = results['articles']
    })

  }

  getDetails(selectedArticle){

    
    const params :NavigationExtras ={
      queryParams :{
        "author": selectedArticle.author,
        "content":selectedArticle.content,
        "description":selectedArticle.description,
        "publishedAt":selectedArticle.publishedAt,
        "url":selectedArticle.url,
        "title":selectedArticle.title,
        "image":selectedArticle.urlToImage,
        "source":selectedArticle.source.name
      }
    }
    this.router.navigate(['/details'], params)
  }


}
