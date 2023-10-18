function arxiu(){
    let nom = prompt("Inserta el nom de l'arxiu");

    let separador = ".";

    let extensio = nom.split(separador);

    console.log(extensio[extensio.length-1])
}