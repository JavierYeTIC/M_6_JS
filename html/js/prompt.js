
let num = prompt("Inserta una numero");

/*for(let m = 0;m<10;m++)
        console.log(`${num} x ${m} = ${(num*m)}`);*/
    if(num>0){
        console.log("a1 = 1");}
    if(num>1){
        console.log("a2 = 1");}
    if(num>2){    
        console.log("a3 = 2");}
let a1 = 1;
let a2 = 2;
for(let m = 3;m<num;m++){
    let result = a1+a2;
    a1=a2;
    a2 = result;
    console.log("a"+(m+1)+" = "+result);
}
