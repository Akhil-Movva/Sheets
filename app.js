const rowCount = 100;
const columnCount = 26;

let AddressDisplayer = document.querySelector(".formula-container__address-bar");


let rowContainer = document.querySelector(".grid-container__row-container");
for(let i=1; i<=rowCount; i++) {
      let rowNumber = document.createElement("div");
      rowNumber.setAttribute("class","grid-container__row-container__row-number");
      rowNumber.innerText=i;
      rowContainer.append(rowNumber);     
  }

let colContainer = document.querySelector(".grid-container__col-container"); 
for(let i=0; i<columnCount; i++) {
    let colNumber = document.createElement("div");
    colNumber.setAttribute("class", "grid-container__col-container__col-number");
    colNumber.innerText = String.fromCharCode(65+i);
    colContainer.append(colNumber);
}

let cellsContainer = document.querySelector(".grid-container__cells-container");

for(let i=1; i<=rowCount; i++){
    let cellContainer = document.createElement("div");
    cellContainer.setAttribute("class","cell-container");
     for(let j=0; j<columnCount; j++)
        {
            let cell = document.createElement("div");
            cell.addEventListener("click", ()=> {
                AddressDisplayer.value=String.fromCharCode(j+65)+i;
            });
            cell.setAttribute("class", "grid-container__cell");
            cell.setAttribute("contentEditable", "true");
            cell.setAttribute("rid",`${i-1}`);
            cell.setAttribute("cid", `${j}`);
            cell.setAttribute("spellcheck", "false");
            cellContainer.append(cell);
        }
     cellsContainer.append(cellContainer);
 }
    