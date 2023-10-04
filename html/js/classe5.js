function CoF(){
    let tipus = prompt("Que vol calcula el C o F");
    let tempura = parseFloat(prompt("Inserta el temperatura"));

    let c=0;
    let f=0

    if (Number.isNaN(tempura)==true){
        console.log("Inserta temperatura numeric")
    }
    else if (tipus=='C'){
        c=(tempura-32)/(9.0/5.0);
        console.log("El "+tempura+"ºF = "+c+"ºC")
    }
    else if (tipus=='F'){
        f=tempura*(9.0/5.0)+32;
        console.log("El "+tempura+"ºC = "+f+"ºF")
    }
    else{
        console.log("Inserta C o F")
    }
    
}