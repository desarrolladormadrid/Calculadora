import { Component } from '@angular/core';
import { __values } from 'tslib';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora Luisete';
  //variables
  boton1: number =1;
  boton2: number= 2;
  boton3: number= 3;
  boton4:number = 4;
  boton5: number= 5;
  boton6:number = 6;
  boton7: number = 7;
  boton8:number =8;
  boton9: number =9;
  boton0:number= 0;
  botonSumar: number;
  botonRestar:number;
  botonMultiplicar:number;
  botonDividir:number;
  botonResultado:number;
  botonBorrado:string = "";

  pantalla: string="";

  
  
  uno(){
    this.pantalla+="1";
    
    console.log(this.pantalla);


  }
  dos(){
    
    this.pantalla+="2";
    console.log(this.pantalla);

  }
  tres(){
    
    this.pantalla+="3";
    console.log(this.pantalla);
  }
  cuatro(){
    
    this.pantalla+="4";
    console.log(this.pantalla);
  }
  cinco(){
    
    this.pantalla+="5";
    console.log(this.pantalla);
  }
  seis(){
    
    this.pantalla+="6";
    console.log(this.pantalla);
  }
  site(){
    
    this.pantalla+="7";
    console.log(this.pantalla);
  }
  ocho(){
    
    this.pantalla+="8";
    console.log(this.pantalla);
  }
  nueve(){
    
    this.pantalla+="9";
    console.log(this.pantalla);
  }
  cero(){
    
    this.pantalla+="0";
    console.log(this.pantalla);
  }
  suma(){
    
    this.pantalla+="+";
    console.log(this.pantalla);
  }
  
  resta(){
    
    this.pantalla+="-";
    console.log(this.pantalla);
  }
  multiplicacion(){
    
    this.pantalla+="*";
    console.log(this.pantalla);
  }
  division(){
    
    this.pantalla+="/";
    console.log(this.pantalla);
  }
  resultado(){
    this.pantalla=eval(this.pantalla);
  }
  borrado(){
    this.pantalla=" ";
  }

  



}
