import { Component, OnInit } from '@angular/core';
import {PuntuacioService} from "../../../puntuacio.service";

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  usuaris: any[] = [];
  constructor(private puntacioservice: PuntuacioService) { }

  ngOnInit(): void {
    this.combinarArrays()
  }
  combinarArrays(){
    this.usuaris=this.puntacioservice.usuaris
  }
}
