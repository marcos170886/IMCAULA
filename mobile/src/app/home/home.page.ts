import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Nome: string;
  Altura: number;
  Peso: number;
  Resultado: number;
  Mensagem: string;
  listImc:any=[];

  constructor() { }

  calcIMC() {
    if (this.Peso > 0 && this.Altura > 0) {
      let finalIMC = this.Peso / (this.Altura / 100 * this.Altura / 100);
      this.Resultado = parseFloat(finalIMC.toFixed(2));
      this.IMCMensagem();
    }
  }
  private IMCMensagem() {
    if (this.Resultado <= 18.5) {
      this.Mensagem = "Peso Baixo"
    }
    if (this.Resultado > 18.5 && this.Resultado < 25) {
      this.Mensagem = "Peso Normal"
    }
    if (this.Resultado >= 25 && this.Resultado <= 30) {
      this.Mensagem = "Sobrepeso"
    }
    if (this.Resultado > 30) {
      this.Mensagem = "Obeso"
    }
  }
  gravaIMC()
  {
    this.listImc.push("Nome: "+this.Nome+"IMC: "+this.Resultado);
    localStorage.setItem('imc', JSON.stringify(this.listImc));
  }
  listaIMC()
  {   
   this.listImc.get('imc');
  
  
  }
}
