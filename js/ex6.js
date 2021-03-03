const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
},
{
    term:"Tautology",
    definition:"logical argument constructed in such a way that it is logically irrefutable"
},
{
    term:"Oxymoron",
    definition:"figure of speech that juxtaposes elements that appear to be contradictory"
}];
const DLelement = document.createElement("dl");
const contentElement=document.getElementById("content");

words.forEach(word=>{
    const dtElement = document.createElement("dt");
    const dlStElement = document.createElement("strong");
    const ddElement = document.createElement("dd");
    dlStElement.textContent = word.term;
    ddElement.textContent = word.definition;

    dtElement.appendChild(dlStElement);
    DLelement.appendChild(dtElement);
    DLelement.appendChild(ddElement);
    
})

document.getElementById("content").appendChild(DLelement);
//for (const [key,value]of Object.entries(words)){
  //  contentElement.appendChild(key);
    //contentElement.appendChild(value);
    //contentElement.appendChild(document.createElement("br"));

