/* =========================
   PAGE NAVIGATION
========================= */

function nextPage(pageNumber) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const next = document.getElementById(
        "page" + pageNumber
    );

    next.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   TYPEWRITER
========================= */

const typewriter =
    document.getElementById("typewriter");

const typeTextContent =
    "Are you ready to see it? ❤️";

let typeIndex = 0;


function typeText() {

    if (typeIndex < typeTextContent.length) {

        typewriter.textContent +=
            typeTextContent.charAt(typeIndex);

        typeIndex++;

        setTimeout(
            typeText,
            65
        );
    }
}


setTimeout(
    typeText,
    700
);


/* =========================
   FLYING NO BUTTON
========================= */

const noBtn =
    document.getElementById("noBtn");


function moveNoButton() {

    const buttonWidth =
        noBtn.offsetWidth;

    const buttonHeight =
        noBtn.offsetHeight;


    const maxX =
        window.innerWidth -
        buttonWidth -
        15;


    const maxY =
        window.innerHeight -
        buttonHeight -
        15;


    const randomX =
        Math.max(
            10,
            Math.random() * maxX
        );


    const randomY =
        Math.max(
            10,
            Math.random() * maxY
        );


    noBtn.style.position =
        "fixed";


    noBtn.style.left =
        randomX + "px";


    noBtn.style.top =
        randomY + "px";


    noBtn.style.zIndex =
        "999";
}


/* Desktop */

noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);


/* Mobile */

noBtn.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        moveNoButton();

    },
    {
        passive: false
    }
);


/* If somehow clicked */

noBtn.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        moveNoButton();

    }
);


/* =========================
   ENVELOPE
========================= */

let envelopeOpened = false;


function openEnvelope() {

    const envelope =
        document.getElementById(
            "envelope"
        );


    const message =
        document.getElementById(
            "letterMessage"
        );


    if (envelopeOpened) {
        return;
    }


    envelopeOpened = true;


    envelope.classList.add(
        "open"
    );


    setTimeout(() => {

        message.classList.add(
            "show"
        );


        setTimeout(() => {

            message.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 300);

    }, 900);
}


/* =========================
   FALLING HEARTS
========================= */

const heartsContainer =
    document.getElementById(
        "hearts"
    );


const heartSymbols = [
    "❤️",
    "💗",
    "💕",
    "💖",
    "💘"
];


function createHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "falling-heart";


    heart.textContent =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 +
        "vw";


    heart.style.fontSize =
        12 +
        Math.random() * 20 +
        "px";


    heart.style.animationDuration =
        4 +
        Math.random() * 5 +
        "s";


    heart.style.animationDelay =
        Math.random() * 1.5 +
        "s";


    heartsContainer.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 10000);
}


/* Keep hearts coming */

setInterval(
    createHeart,
    250
);


/* Initial hearts */

for (
    let i = 0;
    i < 18;
    i++
) {

    setTimeout(
        createHeart,
        i * 120
    );

}