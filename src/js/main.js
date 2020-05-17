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
