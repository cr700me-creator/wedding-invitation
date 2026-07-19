// =========================
// فتح الظرف
// =========================

const envelope = document.getElementById("envelope");
const loader = document.getElementById("loader");
const mainPage = document.getElementById("mainPage");

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {
        loader.style.opacity = "0";
    }, 1700);

    setTimeout(() => {
        loader.style.display = "none";
        mainPage.style.display = "block";
    }, 2400);

});
openBtn.addEventListener("click", () => {

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";
        mainPage.style.display = "block";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },1000);

});

// =========================
// العداد
// =========================

const weddingDate = new Date("2026-10-16T20:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function countdown(){

    const now = new Date().getTime();

    const distance = weddingDate-now;

    if(distance<=0){

        days.innerHTML="0";
        hours.innerHTML="0";
        minutes.innerHTML="0";
        seconds.innerHTML="0";

        return;

    }

    days.innerHTML=Math.floor(distance/(1000*60*60*24));

    hours.innerHTML=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    minutes.innerHTML=Math.floor((distance%(1000*60*60))/(1000*60));

    seconds.innerHTML=Math.floor((distance%(1000*60))/1000);

}

countdown();

setInterval(countdown,1000);

// =========================
// حركة عند النزول
// =========================

const cards = document.querySelectorAll(".glass-card");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(60px)";
    card.style.transition=".8s";

    observer.observe(card);

});
