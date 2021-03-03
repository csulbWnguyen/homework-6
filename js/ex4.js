
const array1= [1,2,3,4,5,6,7,8,9,10,11,12];
const divElement = document.getElementById("table");
//numnum = each iteration of the document.
array1.forEach(numnum =>{
    const linkElement = document.createElement("a");
    if (numnum %4 ==0){
        linkElement.textContent = numnum;
        linkElement.style.backgroundColor = "#6495ED";
    }
    linkElement.textContent = numnum;

    divElement.appendChild(linkElement);
    divElement.appendChild(document.createElement("br"));
    divElement.style.textAlign="center";
});

