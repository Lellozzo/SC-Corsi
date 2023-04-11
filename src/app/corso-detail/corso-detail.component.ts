import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CorsiService } from '../corsi.service';
import { Corso } from '../models/corsi';

@Component({
  selector: 'app-corso-detail',
  templateUrl: './corso-detail.component.html',
  styleUrls: ['./corso-detail.component.css']
})
export class CorsoDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private corsiService: CorsiService){}


corso?: Corso;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if (id !=null) {
      this.corsiService.getById(id).map(r =>{
        this.corso = r
        console.log(r)
      })
    }
  }

}
