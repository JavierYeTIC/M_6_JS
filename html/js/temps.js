let pre = parseInt(prompt("inserta primer numero"));
let pre1 = parseInt(prompt("inserta segun numero"));
let pre2 = parseInt(prompt("inserta tercer numero"));

/*let num = Math.pow(2,pre);

let x =2;
    for (let m=2, z=1,y=pre;z<y;z++){
        x=m*x;
    }

console.time(num);
console.timeEnd(num);
console.log(x);
console.log(num);
console.time(x);
console.timeEnd(x);*/


let mitja = ((pre + pre1) + pre2)/3;

let mayor;
    if((pre>pre1) && (pre>pre2)){
        mayor = pre;
    }
    if((pre1>pre) && (pre1>pre2)){
        mayor = pre1;
    }
    if((pre2>pre) && (pre2>pre1)){
        mayor = pre2;
    }

let menor;
    if((pre<pre1) && (pre<pre2)){
        menor = pre;
    }
    if((pre1<pre) && (pre1<pre2)){
        menor = pre1;
    }
    if((pre2<pre) && (pre2<pre1)){
        menor = pre2;
    }

let mitjana;
    let arr = [pre,pre1,pre2];
    arr.sort();
    mitjana = arr[1];



console.log("mitja:"+mitja 
            +"mayor:"+mayor  
            +"menor:"+menor 
            +"mitjana"+mitjana)