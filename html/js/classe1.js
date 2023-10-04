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