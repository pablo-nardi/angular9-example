import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles:any = []
  artitags:any = [] //ARTICULOES PERTENECIENTES A UN TAG
  tags: any = [];
  constructor(private service: ArticlesService) { }

  ngOnInit(): void {

  }
  loadArticles() {
    this.service.getArticles().subscribe(response => {
      this.articles = response.articles
      console.log(this.articles);
    });
    
  }
  loadTags() {
    this.service.getTags().subscribe(response =>{
      this.tags = response.tags;
      //console.log(this.tags);
      this.tags.forEach(element => {
        console.log(element);

      });
    });
  }
  loadArticlesByTag(tag:string){
    console.log(`tocaste el tag --> ${tag}`);
    this.service.getArticlesByTag(tag).subscribe(response =>{
     this.artitags = response.articles;
     this.articles = response.articles
     console.log(this.artitags);
    });
  }
}
