function docu(){

    let fila = parseInt(prompt("Inserta el nº de files"));
    let columna = parseInt(prompt("Inserta el nº de columnes"));

    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    
    table.style.border="1px solid black";

    for ( let n = 0;n<fila;n++){
        let tr = document.createElement("tr");
        for (let m =0;m<columna;m++){
            let td = document.createElement("td");
            td.style.border="1px solid black";
            td.appendChild(document.createTextNode((n+1)+","+(m+1)));
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.body.appendChild(table);

    console.log(table);
}

