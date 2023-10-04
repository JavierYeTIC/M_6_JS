function fecha() {
    let any = parseInt(prompt("Inserta año"));
    let mes = parseInt(prompt("Inserta mes"));
    let dia = parseInt(prompt("Inserta día"));

    let fecha = new Date();

        fecha.setFullYear(any);
        fecha.setMonth(mes-1);
        fecha.setDate(dia);
    
    
    if(any === fecha.getFullYear() && mes - 1 === fecha.getMonth() &&  dia === fecha.getDate()){
        console.log(fecha.getFullYear() + ":" + fecha.getMonth() + ":" + fecha.getDate());
    }
    else{
        console.log("El fecha que has puesto no es valita")
    }
    
}