function color(){

    let r = parseInt(prompt("Inserta color red"));
    let g = parseInt(prompt("Inserta color verd"));
    let b = parseInt(prompt("Inserta color blau"));

    let hexaR = r.toString(16); 
    let hexaG = g.toString(16); 
    let hexaB = b.toString(16); 

    if(hexaR.length == 1){
        hexaR = "0"+hexaR;
    }
    if(hexaG.length == 1){
        hexaG = "0"+hexaG;
    }
    if(hexaB.length == 1){
        hexaB = "0"+hexaB;
    }

    let hexadecimal = hexaR +""+hexaG+""+hexaB;

    console.log("#"+hexadecimal);

}