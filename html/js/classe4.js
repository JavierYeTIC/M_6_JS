
function cen(){

    let num = parseInt(prompt("Inserta una numero"));
    let num2 = parseInt(prompt("Inserta altra numero"));

    let cennum = Math.abs(num - 100);
    let cennum2 = Math.abs(num2 - 100);

    let prop;

    if (cennum<cennum2){
        prop = num;
        console.log(prop);
    }
    else if (cennum>cennum2){
        prop = num2;
        console.log(prop);
    }
    else {
        console.log("El dos numero esta mateix distancia");
    }
    
}

function data() {
    let hora = parseInt(prompt("Inserta hora"));
    let minut = parseInt(prompt("Inserta minut"));
    let segons = parseInt(prompt("Inserta segons"));

    let data = new Date();
    data.setHours(hora);
    data.setMinutes(minut);
    data.setSeconds(segons + 1);

    console.log(data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds());
}

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

function contDies() {

    let dies = parseInt(prompt("Inserta dies que vol contar"));

    let dia = 0;
    let mes = 0;
    let any = 0;

    any = Math.floor(dies / 365);
    mes = Math.floor((dies%365) / 30);
    dia = Math.floor((dies%365) % 30);

    console.log("El "+dies+ " dies son "+any+" any "+mes+" mesos i "+dia+" dies");
    
}
    













