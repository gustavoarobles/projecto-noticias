import { Component, OnInit } from '@angular/core';
import { ApiNoticiasService } from '../api-noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  data: any []=[];
  constructor(private noticiasService:ApiNoticiasService) { }

  ngOnInit() {
    this.noticiasService.getNoticia().subscribe(notice=>{this.data=notice;})
  }

}
