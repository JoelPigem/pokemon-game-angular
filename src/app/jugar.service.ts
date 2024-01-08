import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugarService {
  nom: string=""
  constructor() { }
  guardarNom(nom: string){
    this.nom=nom
  }
  tornarNom(){
    return this.nom
  }
}
