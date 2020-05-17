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

// let logo = document.querySelector('.logo');

// const activeLogo = (scrollY) => {
//     scrollY > 200 ? logo.classList.add('logo--active') : logo.classList.remove('logo--active');
// };
// activeLogo(window.scrollY);

// window.addEventListener('scroll', () => {
//     let scrollY = window.scrollY;
//     activeLogo(scrollY);
// });

// let modal = document.querySelector('.modal');
// let btnShowModal = document.querySelectorAll('.btn__modal');
// let closeModal = document.querySelectorAll('.modal__close');

// btnShowModal.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         document.body.classList.add('fixed');
//         modal.classList.add('modal--active');
//     });
// });

// closeModal.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         document.body.classList.remove('fixed');
//         modal.classList.remove('modal--active');
//     });
// });

// let linksList = document.querySelectorAll('.link');

// linksList.forEach((link) => {
//     link.addEventListener('click', () => {
//         linksList.forEach((item) => {
//             item.classList.remove('link--active');
//         });

//         link.classList.add('link--active');
//     });
// });

// let paramX = document.querySelector('[data-param="param-x"]');

// paramX.addEventListener("input", function () {
//     console.log(this.value);
// });

// function getListParamY(paramX) {
//     switch (paramX) {
//         case "1":
//             getFormula();
//             break;
//         case "2":
//             break;
//             getFormula();
//         case "3":
//             getFormula();
//             break;
//     }
// }

// function getFormula() {}

// let search = document.querySelector(".search");
// let btn = search.querySelector(".search__btn");

// let form = search.querySelector(".search__form");
// let input = form.querySelector(".search__input");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     return true;
// });

// btn.addEventListener("click", function (e) {
//     if (input.value === "") {
//         search.classList.toggle("search--active");
//     } else {
//         form.requestSubmit();
//     }
// });

// const sortTable = document.querySelectorAll(".table__sort");
// let tBody = document.querySelector(".table__body");
// let trArr = tBody.querySelectorAll(".table__tr");
// let index = false;

// const comparator = (index) => {
//     const collator = new Intl.Collator(["en", "ru"], { numeric: true });
//     return (a, b) => {
//         return collator.compare(a.children[index].innerHTML, b.children[index].innerHTML);
//     };
// };

// const getSort = (index) => {
//     tBody = document.querySelector(".table__body");
//     trArr = tBody.querySelectorAll(".table__tr");
//     tBody.append(...[...trArr].sort(comparator(index)));
// };

// const sort = ({ target }) => {
//     index = Number(target.innerText) - 1;
//     getSort(index);
// };

// sortTable.forEach((tableTH) => tableTH.addEventListener("click", () => sort(event)));

// let form = document.querySelector(".form");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let valid = true;

//     const data = {};
//     const formData = new FormData(e.target);

//     for (const [name, value] of formData) {
//         if (value === "") {
//             valid = false;
//         } else {
//             data[name] = value;
//         }
//     }

//     if (valid !== false) {
//         let html = `
//                 <td>${data.a}</td>
//                 <td>${data.b}</td>
//                 <td>${data.c}</td>
//                 <td>${data.d}</td>
//                 <td>${data.e}</td>
//                 <td>${data.f}</td>
//         `;

//         let tr = document.createElement("tr");
//         tr.classList.add("table__tr");
//         tr.innerHTML = html;
//         tBody.append(tr);

//         if (index !== false) {
//             getSort(index);
//         }

//         form.querySelectorAll("input").forEach((input) => {
//             input.value = "";
//         });
//     }

//     return valid;
// });

// const add = (a) => {
//     let sum = a;
//     const func = (b) => {
//         sum += b;
//         return func;
//     };
//     func.valueOf = () => sum;

//     return func;
// };

// console.log(add(2)(3));

// const add = (x) => {
//     return function (y) {
//         if (y) {
//             x += y;
//             return arguments.callee;
//         } else {
//             return x;
//         }
//     };
// };

// console.log(add(1)(2)(3));

// let a = [...[1, ...[1, 2, ...[3, 4]], ...[2, 4]]];

// console.log(a);
