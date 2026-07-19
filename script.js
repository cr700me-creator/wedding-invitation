const envelope = document.getElementById("envelope");
const screen = document.getElementById("envelopeScreen");
const hero = document.getElementById("hero");

envelope.addEventListener("click",()=>{

    envelope.classList.add("open");

    setTimeout(()=>{

        screen.classList.add("hide");

        hero.classList.add("show");

    },1800);

});
