function canvis(){

    let preu = parseFloat(prompt("Inserta EL PREU DE PRODUCTE"));
    let pagat = parseFloat(prompt("Inserta QUANTES HAS PAGAT"));


    console.log("preu = "+preu+"    i has pagat = "+pagat);

    let lista = [500,200,100,50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01];

    let canbio = pagat - preu;
    canbio.toFixed(2);
    let restu=canbio;
    
    for (let n=0;n<lista.length;n++){
        if(parseInt(canbio / lista[n]) > 0){
            console.log(parseInt(canbio / lista[n])+" de "+lista[n]);
            canbio = canbio%lista[n];
        }
    }
    console.log("Total canvi = "+restu)
} 