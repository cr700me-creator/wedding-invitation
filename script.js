// =========================
// شاشة البداية
// =========================

const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";

    }, 1000);

});


// =========================
// العداد التنازلي
// =========================

const targetDate = new Date("2026-10-16T20:00:00").getTime();

const countdown = document.getElementById("countdown");

function updateCountdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance < 0){

        countdown.innerHTML = "🎉 بدأ الحفل";

        return;

    }

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds = Math.floor((distance%(1000*60))/1000);

    countdown.innerHTML =
    `${days} يوم<br>${hours} ساعة : ${minutes} دقيقة : ${seconds} ثانية`;

}

updateCountdown();

setInterval(updateCountdown,1000);
