function base10(){
    let num = parseInt(prompt("Inserta una numero"));


    function calculs(num) {
        let hex = '';
        let oct = '';
        let bina = '';
        let dividendo = num;
        while (dividendo != 0 ){
          
          while (dividendo > 0){
            let residBina = dividendo % 2;
            bina = residBina.toString() + bina;
            dividendo = Math.floor(dividendo / 2);
          };
          dividendo = num;
          while (dividendo > 0){
            let residOct = dividendo % 8;
            oct = residOct.toString() + oct;
            dividendo = Math.floor(dividendo / 8);
          };
          dividendo = num;
          while ( dividendo > 0){
            let residHex = dividendo % 16;
            hex = residHex.toString() + hex;
            dividendo = Math.floor(dividendo / 16);
          };
          return console.log("Aquest numero en hexadecimal: "+hex+"\nAquest numero en octal: "+oct+"\nAquest numero en binari: "+bina);
      }
    }
     
    calculs(num);
    /*function binari(num) {
        let resultado = '';
        let dividendo = num;
      
        while (dividendo > 0) {
          let residuo = dividendo % 2;
          resultado = residuo.toString() + resultado;
          dividendo = Math.floor(dividendo / 2);
        }
        return resultado;
      } 
    
    function Octal(num) {
        let resultado = '';
        let dividendo = num;
      
        while (dividendo > 0) {
          let residuo = dividendo % 8;
          resultado = residuo.toString() + resultado;
          dividendo = Math.floor(dividendo / 8);
        }
        return resultado;
      }   
    function hexadecimal(num) {
        let resultado = '';
        let dividendo = num;
      
        while (dividendo > 0) {
          let residuo = dividendo % 16;
          resultado = residuo.toString() + resultado;
          dividendo = Math.floor(dividendo / 16);
        }
        return resultado;
      } 
    

    oct = Octal(num);
    hex = hexadecimal(num);
    bina = binari(num);
    
    console.log(bina);  
    console.log(oct);
    console.log(hex);*/
    
}