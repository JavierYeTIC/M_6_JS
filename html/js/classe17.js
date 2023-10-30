function date(){
    let date = new Date();

    console.log("Avui és "+date.getDate()+" del "+(date.getMonth()+1)+" del "+date.getFullYear());

    let princip = new Date(date.getFullYear(), 0, 1);
    let milis = date - princip;
    let dia = milis / (1000 * 60 * 60 * 24);

    let setmana = parseInt(dia/7)
    console.log("Han passat "+setmana+" setmanes de l'any");

    let diaCen = (dia / 365) *100
    console.log("El % de dies transcorregut és "+diaCen.toFixed(2)+"%");
    console.log("Queden un "+(100-diaCen).toFixed(2)+"% de dies a l'any");

    console.log("Ara són les "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
    let temp = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    
    let segon = (date-temp) /1000;
    let segonCen =(segon/86400)*100
    console.log("El % del dia que ha passat és "+segonCen.toFixed(2)+"%");
    console.log("Queden un % de "+(100-segonCen).toFixed(2)+"% de dia");


}

function europa(){
    var num = prompt("Inserta un número");

    while (num.length < 8) {
        num = "0" + num;
    }

    while (num.length > 8 && num.length < 13) {
        num = "0" + num;
    }

    console.log(num);
    console.log(num.slice(7, 8));
    console.log(num.length);

    if (num.length == 8) {
        let distancia = 0; 
        //if (num.slice(7, 8) % 2 == 0) {
            for (let m = 7, n = 6; n > -1; m -= 2, n -= 2) {
                distancia += num.slice(n, m) * 3;
                distancia += num.slice(n - 1, m - 1) * 1;
            }
            console.log(distancia);
        /*} else {
            for (let m = 8, n = 7; n > 0; m -= 2, n -= 2) {
                distancia += num.slice(n, m) * 1;
                distancia += num.slice(n - 1, m - 1) * 3;
            }
            console.log(distancia);*/
        //}
        
        for(let m = 0; m < 10; m++){
            if((m * 10) >= distancia){
                por10 = m * 10;
                break;
            }
        }
        console.log(por10);
        let untim = por10 - distancia;
        let resut = null;
        if (num.slice(7, 8) == untim) {
            resut = true;
        } else {
            resut = false;
        }
    
        console.log(resut); 
    }
    if (num.length == 13) {
        let distancia = 0; 
        //if (num.slice(7, 8) % 2 == 0) {
            for (let m = 12, n = 11; n > -1; m -= 2, n -= 2) {
                distancia += num.slice(n, m) * 3;
                distancia += num.slice(n - 1, m - 1) * 1;
            }
            console.log(distancia);
        /*} else {
            for (let m = 8, n = 7; n > 0; m -= 2, n -= 2) {
                distancia += num.slice(n, m) * 1;
                distancia += num.slice(n - 1, m - 1) * 3;
            }
            console.log(distancia);*/
        //}
        
        for(let m = 0 ; m < 15; m++){
            if((m * 10) >= distancia){
                por10 = m * 10;
                break;
            }
        }
        console.log(por10);
        let untim = por10 - distancia;
        let resut = null;
        if (num.slice(12, 13) == untim) {
            resut = true;
        } else {
            resut = false;
        }
    
        console.log(resut); 
    }
   
}