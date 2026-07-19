const envelope=document.getElementById("envelope");
const screen=document.getElementById("envelopeScreen");

envelope.addEventListener("click",()=>{

envelope.classList.add("open");

setTimeout(()=>{

screen.classList.add("hide");

},1800);

});

s.y+=s.d;

if(s.y>canvas.height){

s.y=0;

s.x=Math.random()*canvas.width;

}

}

requestAnimationFrame(draw);

}

draw();
