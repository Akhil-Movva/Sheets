const cellPropsDB = [];

for(let i=0; i<rowCount; i++){
    const propsList = [];
    for(let j=0; j<columnCount; j++) {
        const props = {};
        props.fontFamily="monospace";
        props.fontSize="14";
        props.bold=false;
        props.italic=false;
        props.underline=false;
        props.alignment="left";
        props.color="#000000";
        props.bgColor="#000000";
        props.value="";
        propsList.push(props);
    }
    cellPropsDB.push(propsList);
}

const inactiveColor = "#dfe6e9";
const activeColor = "#95a5a6";

const fontFamily = document.querySelector(".font-family");
fontFamily.addEventListener("change", (e) => {
    const [cellProps, cell] = getActiveCell();
    cellProps.fontFamily = e.target.value;
    cell.style.fontFamily = cellProps.fontFamily;
});

const fontSize = document.querySelector(".font-size");
fontSize.addEventListener("change",(e) => {
    const [cellProps, cell] = getActiveCell();
    cellProps.fontSize = e.target.value;
    cell.style.fontSize = cellProps.fontSize + "px";
});

const bold = document.querySelector(".bold");
bold.addEventListener("click", () => {
    const [cellProps, cell] = getActiveCell();
    cellProps.bold=!cellProps.bold;
    cell.style.fontWeight=cellProps.bold? "bold" : "normal";
    bold.style.backgroundColor=cellProps.bold? activeColor : inactiveColor;
});

const italic = document.querySelector(".italic");
italic.addEventListener("click", () => {
    const [cellProps, cell] = getActiveCell();
    cellProps.italic=!cellProps.italic;
    cell.style.fontStyle=cellProps.italic? "italic" : "normal";
    italic.style.backgroundColor=cellProps.italic? activeColor : inactiveColor;
});

const underline = document.querySelector(".underline");
underline.addEventListener("click", () => {
    const [cellProps, cell] = getActiveCell();
    cellProps.underline=!cellProps.underline;
    cell.style.textDecoration=cellProps.underline? "underline" : "none";
    underline.style.backgroundColor=cellProps.underline? activeColor : inactiveColor;
});

const color = document.querySelector(".color");
color.addEventListener("input", () => {
    const [cellProps, cell] = getActiveCell();
    cellProps.color = color.value;
    cell.style.color = cellProps.color;
});

const bgColor = document.querySelector(".bg-color");
bgColor.addEventListener("input", () => {
    const [cellProps, cell] = getActiveCell();
    cellProps.bgColor = bgColor.value;
    cell.style.backgroundColor = cellProps.bgColor;
})

const alignmentEle = document.querySelectorAll(".align");
alignmentEle.forEach(function (ele) {
        ele.addEventListener("click", (e) => {
            const alignment = e.target.classList[2];
            const [cellProps, cell] = getActiveCell();
            cellProps.alignment = alignment;
            cell.style.textAlign = cellProps.alignment;
            switch (alignment) {
                case "left":
                    alignmentEle[0].style.backgroundColor = activeColor;
                    alignmentEle[1].style.backgroundColor = inactiveColor;
                    alignmentEle[2].style.backgroundColor = inactiveColor;
                    break;
                case "center":
                    alignmentEle[0].style.backgroundColor = inactiveColor;
                    alignmentEle[1].style.backgroundColor = activeColor;
                    alignmentEle[2].style.backgroundColor = inactiveColor;
                    break;
                case "right":
                    alignmentEle[0].style.backgroundColor = inactiveColor;
                    alignmentEle[1].style.backgroundColor = inactiveColor;
                    alignmentEle[2].style.backgroundColor = activeColor;
                    break;
            }
        });
    })

function getActiveCell() {
    const [row, col] = cellAddressToRowColumnMapping(AddressDisplayer.value);  
    const cell = document.querySelector(`.grid-container__cell[rid="${row}"][cid="${col}"]`);
    const cellProps = cellPropsDB[row][col];
    return [cellProps, cell];
 }

 function cellAddressToRowColumnMapping(address) {
    const col = Number(address.charCodeAt(0))-65;
    const row = Number(address.slice(1)-1);
    return [row,col];
 }

 for(let i=0;i<rowCount;i++){
       for(let j=0;j<columnCount;j++) {
          const cell = document.querySelector(`.grid-container__cell[rid="${i}"][cid="${j}"]`);
          cell.addEventListener("click", cellClickHandler(i, j, cell));
       }
    }

function cellClickHandler(i, j, cell) {
    return function () {
        const cellProps = cellPropsDB[i][j];

        fontFamily.value = cellProps.fontFamily;
        cell.style.fontFamily = cellProps.fontFamily;

        fontSize.value = cellProps.fontSize;
        cell.style.fontSize = cellProps.fontSize;

        bold.style.backgroundColor = cellProps.bold ? activeColor : inactiveColor;
        cell.style.fontWeight = cellProps.bold ? "bold" : "normal";

        italic.style.backgroundColor = cellProps.italic ? activeColor : inactiveColor;
        cell.style.fontStyle = cellProps.italic ? "italic" : "normal";

        underline.style.backgroundColor = cellProps.underline ? activeColor : inactiveColor;
        cell.style.textDecoration = cellProps.underline ? "underline" : "none";

        const alignment = cellProps.alignment;
        switch (alignment) {
            case "left":
                alignmentEle[0].style.backgroundColor = activeColor;
                alignmentEle[1].style.backgroundColor = inactiveColor;
                alignmentEle[2].style.backgroundColor = inactiveColor;
                break;
            case "center":
                alignmentEle[0].style.backgroundColor = inactiveColor;
                alignmentEle[1].style.backgroundColor = activeColor;
                alignmentEle[2].style.backgroundColor = inactiveColor;
                break;
            case "right":
                alignmentEle[0].style.backgroundColor = inactiveColor;
                alignmentEle[1].style.backgroundColor = inactiveColor;
                alignmentEle[2].style.backgroundColor = activeColor;
                break;
        }
    };
}

