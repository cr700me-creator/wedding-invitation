const envelope=document.getElementById("envelope");
const screen=document.getElementById("envelopeScreen");

envelope.addEventListener("click",()=>{

envelope.classList.add("open");

setTimeout(()=>{

screen.classList.add("hide");

},1800);

});
