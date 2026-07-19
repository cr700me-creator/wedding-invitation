const weddingDate = new Date("October 16, 2026 20:00:00").getTime();

const countdown = document.createElement("div");
countdown.id = "countdown";
countdown.style.marginTop = "40px";
countdown.style.fontSize = "28px";
countdown.style.color = "#d4af37";

document.querySelector("#details").appendChild(countdown);

setInterval(() => {
    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML =
        `<h3>باقي على فرحتنا ❤️</h3>
         <p>${days} يوم : ${hours} ساعة : ${minutes} دقيقة : ${seconds} ثانية</p>`;

}, 1000);
