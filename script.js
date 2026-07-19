// =========================
// Luxury Wedding Invitation
// Script.js
// =========================

// العناصر الأساسية
const envelope = document.getElementById("envelope");
const loader = document.getElementById("loader");
const mainPage = document.getElementById("mainPage");

// =========================
// فتح الظرف
// =========================

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.classList.add("open");

        setTimeout(() => {
            loader.style.opacity = "0";
        }, 1700);

        setTimeout(() => {
            loader.style.display = "none";
            mainPage.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 2400);

    });

}

// =========================
// العداد التنازلي
// =========================

const weddingDate = new Date("2026-10-16T20:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        if (days) days.innerHTML = "0";
        if (hours) hours.innerHTML = "0";
        if (minutes) minutes.innerHTML = "0";
        if (seconds) seconds.innerHTML = "0";

        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    if (days) days.innerHTML = d;
    if (hours) hours.innerHTML = h;
    if (minutes) minutes.innerHTML = m;
    if (seconds) seconds.innerHTML = s;

}

updateCountdown();

setInterval(updateCountdown, 1000);

// =========================
// ظهور البطاقات أثناء النزول
// =========================

const cards = document.querySelectorAll(".glass-card");

if (cards.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold: 0.2
    });

    cards.forEach((card) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(60px)";
        card.style.transition = "all .8s ease";

        observer.observe(card);

    });

}

// =========================
// زر موقع القاعة (اختياري)
// =========================

const locationBtn = document.querySelector(".gold-btn[href='#']");

if (locationBtn) {

    locationBtn.addEventListener("click", function (e) {

        e.preventDefault();

        window.open(
            "https://maps.google.com/?q=قاعة+جاردينيا+الإسماعيلية",
            "_blank"
        );

    });

}
// =========================
// معرض الصور
// =========================

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {

    if (isPlaying) {

        music.pause();
        musicBtn.innerHTML = "🔇";

    } else {

        music.play();
        musicBtn.innerHTML = "🔊";

    }

    isPlaying = !isPlaying;

});
