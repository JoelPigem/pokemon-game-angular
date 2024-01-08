import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {JugarService} from "../jugar.service";

@Component({
  selector: 'app-iniciar-sessio-joel-pigem',
  templateUrl: './iniciar-sessio-joel-pigem.component.html',
  styleUrls: ['./iniciar-sessio-joel-pigem.component.css']
})
export class IniciarSessioJoelPigemComponent implements OnInit {
  nom: any = ""
  constructor(private router: Router, private jugarservice: JugarService) { }

  ngOnInit(): void {
  }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
  guardarNom(nom: string){
    this.jugarservice.guardarNom(nom)
  }
}
