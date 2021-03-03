function highlighter() {
    const divElement = Array.from(document.getElementsByTagName("p"));
    divElement.forEach(element =>{
        element.style.backgroundColor="yellow";
        element.style.fontWeight="bold";
    })
}
highlighter();
