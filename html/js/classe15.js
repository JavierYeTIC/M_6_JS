function carac(){
    let text = prompt("Inserta el text");
    let caracter = prompt("Inserta el caracter");

    let a = 0;

    for (let i =0;i<text.length;i++){
        if (text[i]==caracter){
            a++
        }
    }
    if(a >= 2 && a<=4){
        console.log("Si està contingut caracter "+caracter+" de 2 a 4 vegades")
    }
    else{
        console.log("No està contingut caracter "+caracter+" de 2 a 4 vegades")
    }
}

function paraula(){
    let text = prompt("Inserta el text");
    let numero = parseInt(prompt("Inserta el numero"));
    let a = '';
    for (let i =0;i<text.length;i++){
        if (i != numero){
            a+=text[i];
        }
    }

    console.log(a);
}

function mym(){
    let text = prompt("Inserta el text");

    let myu = '';
    let minu = '';
    let len = text.length;
    let paraure = 1;
    let vocal = '';
    let vocalN =0;
    let expr = /[aàáäeàáeéèëiìíïoòóöuùúü]/gi;
    for (let i =0;i<text.length;i++){
            myu+=text[i].toUpperCase(); 
            minu+=text[i].toLowerCase();
        let separador = " ";
        if(text[i]==separador){
            paraure++;
        }
        if(text[i].match(expr)){
            vocalN++;      
            vocal+=text[i];
        }
    }
    document.write("Text en majúscules: "+myu+"</br>");
    document.write("Text en minuscula: "+minu+"</br>");
    document.write("longitud total :"+len+"</br>");
    document.write("Nombre de paraules :"+paraure+"</br>");
    document.write("Les vocals que conté: "+vocal+"</br>");
    document.write("El número de vocals: "+vocalN+"</br>");
    for(let n = 0;n<text.length;n++){
        document.write(text.substring(n,len)+"</br>");
    }

}


function temps(){
    let temp = prompt("Inserta hora");
    let hora = parseInt(temp.substring(0,2));
    let minut = parseInt(temp.substring(3));

    let minutTotal = (hora * 60) + minut;
    let minutFalta = 1440 - minutTotal;
    if(minutFalta === 1440){
        document.write("Bon any Nou");
    } else {
        document.write("falten " + minutFalta + " minuts");
    }
}
