import { Component } from '@angular/core';
import { ScriviciDto } from '../models/utenti';
import { CorsiService } from '../corsi.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent {
model: ScriviciDto = {nome: "", email: "", telefono: "", messaggio:""}

mex?:string = ""

constructor(public corsiService: CorsiService){}

  scrivici(){
    this.corsiService.scrivi(this.model).subscribe(u =>{
      console.log(u, this.model)
      return this.mex=u.msg;
      
    })
    
  }
}
