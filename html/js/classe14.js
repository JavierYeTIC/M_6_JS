function arxiu(){
    let nom = prompt("Inserta el nom de l'arxiu");

    let separador = ".";

    let extensio = nom.split(separador);

    console.log(extensio[extensio.length-1])
}


function text(){
    let text = prompt("Inserta el text");

    let a = 0;
    let b = 0;

    for (let i =0;i<text.length;i++){
        if (text[i]=='a'){
            a++
        }
        if (text[i]=='b'){
            b++
        }
    }
    if(a = b){
        console.log("Si te mateix nº de 'a' que de 'b'")
    }
    else{
        console.log("No te mateix nº de 'a' que de 'b'")
    }

}


function cadena(){
    let text1 = prompt("Inserta el primera text");
    let text2 = prompt("Inserta el segona text");

    if(text1.length==text2.length){
        console.log("Si tenen mateix longitud")
    }
    else{
        console.log("No tenen mateix longitud")
    }

}
