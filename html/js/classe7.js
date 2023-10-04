function tele(){

    let hora = parseInt(prompt("Inserta hora"));
    let minut = parseInt(prompt("Inserta minut"));
    let segons = parseInt(prompt("Inserta segons"));

    let tempsT = new Date();

    tempsT.setHours(hora);
    tempsT.setMinutes(minut);
    tempsT.setSeconds(segons);

    let segonsT = (hora*3600)+(minut*60)+segons
    let preu = 5/60;
    let preuF = (segonsT*preu)+10;
    let preuE = parseInt(preuF / 100);
    let preuC = Math.round(preuF%100);

    console.log(tempsT.getHours() + ":" + tempsT.getMinutes() + ":" + tempsT.getSeconds());
    console.log("preu: "+preuE+" euros y "+preuC+" centim")


}