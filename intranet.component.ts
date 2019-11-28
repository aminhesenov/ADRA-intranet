import { Component, OnInit } from '@angular/core';
import {AuthService} from '../Service/auth.service';
import {AlertifyjsService} from '../Service/alertifyjs.service';
import {News} from '../Models/news';


@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.css']
})
export class IntranetComponent implements OnInit {
  news: News[];
  constructor(private authService: AuthService, private alertify: AlertifyjsService) { }
  ngOnInit() {
    this.getNews();
  }
  getNews() {
    this.authService.getNews().subscribe((result: News[]) => {
      this.news = result;
    }, error => {
      this.alertify.error('Daxili Server xetasi');
    });
  }
}
