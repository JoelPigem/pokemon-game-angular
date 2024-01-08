import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import {JugarService} from "../../../jugar.service";
import {PuntuacioService} from "../../../puntuacio.service";

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {
  punts:number=0
  nom:string=""
  get score(): number {
    return this.playerService.score;
  }

  get highScore(): number {
    return this.playerService.highScore;
  }

  constructor(
    private playerService: PlayerService,
    private jugarservice: JugarService,
    private puntuacioservice: PuntuacioService
  ) { }

  ngOnInit(): void {
    this.nomAgafar()
    this.puntsAgafar()
    this.agafarInformacio(this.nom,this.punts)
  }
  nomAgafar(){
    this.nom=this.jugarservice.tornarNom()
  }
  puntsAgafar(){
    this.punts=this.playerService.score
  }
  agafarInformacio(nom: string, punts: number){
    nom= this.nom
    punts=this.punts
    this.puntuacioservice.guardarInformacio(nom,punts)
  }

}
