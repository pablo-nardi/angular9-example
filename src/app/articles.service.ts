import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Solicitud} from './model/solicitud';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  readonly local = 'http://localhost:3000/';
  readonly baseUrl = 'https://conduit.productionready.io/api/';

  constructor(private http: HttpClient) { }


  getSolicitudes(){
    const url = this.local + 'solicitudes';
    return this.http.get<any>(url);
  }

  getArticles() {
    const url = this.baseUrl + 'articles';
    return this.http.get<any>(url);
  }
  getTags() {
    const url = this.baseUrl + 'tags';
    return this.http.get<any>(url);
  }
  getArticlesByTag(tag:string){
    const url = `${this.baseUrl}articles?tag=${tag}&limit=5`;
    return this.http.get<any>(url);
  }
  getcomments(slug:string,callback){
    const url = `${this.baseUrl}articles/${slug}/comments`;
    this.http.get<any>(url).subscribe(callback);
  }
  addComment(slug:string,comment:string){
    console.log(`SLUG: ${slug} Comment: ${comment}`);
    const url = `${this.baseUrl}articles/${slug}/comments`;
    const token = this.authenticate(({user:{token}})=>{
      const headers = { Authorization: 'Token ' + token }
      this.http.post<any>(url,{comment:{body:comment}},{headers}).subscribe((callback=>{
        console.log(callback);
      }));
    });
  } 
  authenticate(user){
    const url = `${this.baseUrl}/users/login`;
    const email = 'pnardi@pnardi.com';
    const pswd = 'pablonardi';
    this.http.post<any>(url,{user:{email:email,password:pswd}}).subscribe(user);
  }
}
