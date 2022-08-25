import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiNoticiasService {
  path:string='https://newsapi.org/v2/top-headlines?country=ar&apiKey=6699f3f3d27a4f11aee6b148c6c505e4';
  constructor(private http:HttpClient) { }
  getNoticia(){
    return this.http.get<any>(this.path);
  }
}

