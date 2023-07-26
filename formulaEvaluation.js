for(let i=0;i<rowCount;i++){
    for(let j=0;j<columnCount;j++) {
       const cell = document.querySelector(`.grid-container__cell[rid="${i}"][cid="${j}"]`);
       cell.addEventListener("blur", () => {
           const cellProps = cellPropsDB[i][j];
           cellProps.value = cell.innerText;
           console.log(cellProps.value);
       });
    }
 }

let formulaBar = document.querySelector(".formula-container__formula-bar");

formulaBar.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && formulaBar.value) {
        const formula = formulaBar.value.split(" ");
        for (let i=0; i<formula.length; i++) {
            const term = formula[i];
            if(term.charCodeAt(0) >= 65 && term.charCodeAt(0) <= 90) {
                const [row, col] = cellAddressToRowColumnMapping(term);
                formula[i] = cellPropsDB[row][col].value;
            }
    }
       const expr = formula.join(" ");
       const evaluatedValue = eval(expr);
       const [,cell] = getActiveCell();
       cell.innerText = evaluatedValue;
    }
} )