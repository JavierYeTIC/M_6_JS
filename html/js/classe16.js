function game(){
    let inserta = prompt("inserta un nemero");

    let num = parseInt(Math.random()*(100-1)+1);

    let cont = 0;

    console.log(num);

    while (inserta != num){
        
        if(inserta > num){
            inserta = prompt("El numero es menor");
            cont++;
        }
        if(inserta < num){
            if (inserta == 0){
                console.log("game over");
                return;
            };
            inserta = prompt("El numero es mayor");
            cont++;
        }
        if(inserta == num){
            console.log("has cercat numero");
            console.log("Tu has intentat "+cont+ " vegades");
            break;
        }
    }

    
}


function any() {
    let any1 = parseInt(prompt("Inserta el any1"));
    let any2 = parseInt(prompt("Inserta el any2"));

    for (let any = any1; any <= any2; any++) {
        let primerDia = new Date(any, 0, 1); 
        if (primerDia.getDay() == 3) {
            console.log("El primer día del año "+any+" es miércoles.");
            break;
        }if(any == any2){
            console.log("Entre aqueste dos any no hi ha un any que comença en dimeces")
        }
    }
}


function vocal(){
    let paraula = prompt("inserta el paraure");

    let vocal = [/[aàáä]/gi,/[eéèë]/gi,/[iìíï]/gi,/[oòóö]/gi,/[uùúü]/gi];
    let pentavocal = false;

    for (let i =0;i<vocal.length;i++){
        
        if(paraula.match(vocal[i])){
            pentavocal = true;      
        }else{
            pentavocal = false;
            break;
        }
    }
    if(pentavocal){
        console.log("Si es pentavocal");
    }else{
        console.log("No es pentavocal");
    }
    
}