
    function mostra(){
        alert("hola mon");
    }
   function moush(){
        alert("good night");
   }
   function change(){
    Elemento = document.getElementById("inp").value;
    alert(Elemento);
   }
   function table(){
    let num = document.getElementById("numero").value;
    if (num <=10 & num >0){
        for(let m = 0;m<10;m++)
        console.log(num+" x "+m+" = "+(num*m))
    }
    else
        console.log("Error")
    
   }
