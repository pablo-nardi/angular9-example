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
  artitags:any = [] //ARTICULOS PERTENECIENTES A UN TAG
  selectedTag: string;
  tags: any = [];
  comments: any [];
  constructor(private service: ArticlesService) { }

  ngOnInit(): void {
    this.loadTags();
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
      this.tags.forEach(element => {
        console.log(element);
/**var cars = cars.filter(function(car) {
    return car.brand !== 'Seat'; 
}); */
      });
    });
  }
  loadArticlesByTag(tag:string){
    console.log(`tocaste el tag --> ${tag}`);
    this.selectedTag = tag;
    this.service.getArticlesByTag(tag).subscribe(response =>{
     this.artitags = response.articles;
     this.articles = response.articles
     console.log(this.artitags);
    }); 
  }
  
  addComment(slug:string,comment:any){
    console.log(`Slug del addComment: ${slug}`);
    this.service.addComment(slug,comment.value); 
    this.getComments(slug);
  }
  getComments(slug:string){
    console.log(`Slug del getComments: ${slug}`);
    this.service.getcomments(slug,(response)=>{
      this.comments = response.comments;
    });
  }
    
  
}
