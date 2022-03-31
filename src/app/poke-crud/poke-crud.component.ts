import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokes } from '../POKE';

@Component({
  selector: 'app-poke-crud',
  templateUrl: './poke-crud.component.html',
  styleUrls: ['./poke-crud.component.css']
})
export class PokeCrudComponent implements OnInit {

pokes$: Observable<Pokes[]> | any;

  constructor() { }

  ngOnInit(): void {
  }

atualizarPoke() {

}


}
