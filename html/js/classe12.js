function piramide(){

    let columna = parseInt(prompt("Inserta el nº de columnes"));

    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    
    table.style.border="1px solid black";
    /*td.style.backgroundColor="red";*/
    for ( let n =0;n<Math.abs(columna/2);n++){
        let tr = document.createElement("tr");
        for (let j = 0; j < n * 2 + 1; j++) {
            let td = document.createElement("td");
            td.style.width="20px";
            td.style.height="20px";
            td.style.border="1px solid ";
            td.style.margin="0px"
            tr.appendChild(td);
            table.style.textAlign = "center";   
            td.style.display = "inline-block";
            td.style.backgroundColor="red";
        }

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    document.body.appendChild(table);

    console.log(table);
}

