import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PuntuacioService {
  usuaris: any[] = [];

  constructor() {this.tornarArray() }

  guardarInformacio(nom: string, punts: number){
    this.usuaris.push(nom,punts)
}
tornarArray(){
    return this.usuaris
}

}
