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