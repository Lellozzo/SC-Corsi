import { Component, OnInit } from '@angular/core';
import { Corso } from '../models/corsi';
import { CorsiService } from '../corsi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  corsi: Corso[] = [];

  constructor (public corsiService: CorsiService){}
  
  ngOnInit(): void {
    this.getCorsi();
  }

  getCorsi(){
    this.corsi = this.corsiService.getCorsi();
  }

}
