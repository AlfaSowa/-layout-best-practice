/* ================================== popup ================================== */
let popups = document.querySelectorAll(".popup");
let btnsShowPopup = document.querySelectorAll("[data-popup]:not(.popup)");

togglePopup = (item) => {
    document.body.classList.toggle("fixed");
    item.classList.toggle("popup--active");
};

btnsShowPopup.forEach((btn) => {
    btn.addEventListener("click", () => {
        popups.forEach((item) => {
            if (item.dataset.popup == btn.dataset.popup) {
                togglePopup(item);
            }
        });
    });
});

popups.forEach((item) => {
    item.querySelector(".popup__close").addEventListener("click", () => {
        togglePopup(item);
    });

    item.addEventListener("click", (e) => {
        if (!e.target.closest(".popup__inner")) {
            togglePopup(item);
        }
    });
});

/* ================================== burger ================================== */
let burgerBtn = document.querySelector(".burger");
let headerMenu = document.querySelector(".menu");

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("burger--active");
    headerMenu.classList.toggle("menu--active");
});

/* ================================== tabs ================================== */
let tabs = document.querySelectorAll("[data-tabs]");

tabs.forEach((item) => {
    let itemTabs = item.querySelectorAll(".tab");
    let itemTabsContent = item.querySelectorAll(".tab__content");

    itemTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            itemTabs.forEach((elem) => {
                elem.classList.contains("tab--active") ? elem.classList.remove("tab--active") : null;
            });

            itemTabsContent.forEach((elem) => {
                elem.classList.contains("tab__content--active") ? elem.classList.remove("tab__content--active") : null;
                elem.dataset.id === tab.dataset.id ? elem.classList.add("tab__content--active") : null;
            });

            tab.classList.add("tab--active");
        });
    });
});

/* ================================== anchors ================================== */
let anchors = document.querySelectorAll('a[href*="#"]');

function smoothScrol(blockOffsetTop) {
    let targetPosition = blockOffsetTop;
    let startPosition = window.pageYOffset;
    let distance = 0;
    let speed = 50;

    if (startPosition < targetPosition) {
        distance = targetPosition - startPosition;
    } else {
        distance = startPosition - targetPosition;
    }

    function animation() {
        if (distance > 0) {
            distance -= speed;
            window.scrollTo(0, startPosition);

            if (startPosition > targetPosition - 50) {
                startPosition -= speed;
            } else if (startPosition < targetPosition - 50) {
                startPosition += speed;
            }

            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

anchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        let blockID = anchor.getAttribute("href").substr(1);
        let blockOffsetTop = document.getElementById(blockID).offsetTop;

        smoothScrol(blockOffsetTop);
    });
});

let galeryCard = document.querySelector(".galery__card-content");
let galeryCardHeight = galeryCard.clientHeight;
let span = document.createElement("span");
galeryCard.append(span);

const string = "asda sdasd";

function spanAddString() {
    span.innerHTML += `${string} `;

    if (span.offsetHeight <= galeryCard.clientHeight) {
        spanAddString();
    }
}
spanAddString();
