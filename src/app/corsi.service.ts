import { Injectable } from '@angular/core';
import { Corso, DettaglioCorso, ListaCorsi } from './models/corsi';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ScriviciDto } from './models/utenti';

@Injectable({
  providedIn: 'root'
})
export class CorsiService {

  private database: ListaCorsi = {
    "corsi": [
      {
      "id": 1,
      "titolo": "Web Design",
      "durata": 2,
      "costo": 300,
      "docente": "Massimetto",
      "data_partenza": "ieri",
      "n_partecipanti": 10},
      {
      "id": 2,
      "titolo": "ChatGpt",
      "durata": 3,
      "costo": 600,
      "docente": "Pinocchio",
      "data_partenza": "oggi",
      "n_partecipanti": 100
      },
      {
        "id": 3,
        "titolo": "Angular",
        "durata": 4,
        "costo": 500,
        "docente": "Mike",
        "data_partenza": "16 agosto 2023",
        "n_partecipanti": 50
      },
      {
        "id": 4,
        "titolo": "Bitcoin",
        "durata": 8,
        "costo": 900,
        "docente": "Mr Satoshi",
        "data_partenza": "21 novembre 2023",
        "n_partecipanti": 25
      }
    ]
  };

  constructor(private http: HttpClient) { }

  id?:string

  getCorsi(): Corso[] {
    return this.database.corsi;
  }

  getById(id:string){
    return this.database.corsi.filter(x => x.id == +id)
  }

  scrivi(user:ScriviciDto): Observable<any> {
    return this.http.post<any>("http://l4com.labforweb.it/backend/web/test/ajax/12-01/modulo_contatti.php", user);
  }
}
