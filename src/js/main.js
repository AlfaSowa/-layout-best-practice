let modal = document.querySelector(".modal");
let btnShowModal = document.querySelectorAll(".btn__modal");
let closeModal = document.querySelectorAll(".modal__close");

btnShowModal.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.body.classList.add("fixed");
        modal.classList.add("modal--active");
    });
});

closeModal.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.body.classList.remove("fixed");
        modal.classList.remove("modal--active");
    });
});

//burger ================
let burgerBtn = document.querySelector(".burger");
let headerMenu = document.querySelector(".menu");

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("burger--active");
    headerMenu.classList.toggle("menu--active");
});

//tabs ================================
let tabs = document.querySelectorAll(".tab");
let tabsContent = document.querySelectorAll(".tab__content");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((item) => {
            item.classList.contains("tab--active") ? item.classList.remove("tab--active") : null;
        });

        tabsContent.forEach((item) => {
            item.classList.contains("tab__content--active") ? item.classList.remove("tab__content--active") : null;
            item.dataset.id === tab.dataset.id ? item.classList.add("tab__content--active") : null;
        });

        tab.classList.add("tab--active");
    });
});

//плавный переход по якорям
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
