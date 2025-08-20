
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected')

    select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');

    if (select.classList.contains('select-clicked')) {
        selected.style.color = "#fff";
    } else {
        selected.style.color = "#222";
    }

    });


    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

        });
    });
});

// cards
const section = document.querySelector(".cards-container");

const check = document.getElementById("checkbox");
const sun = document.querySelector(".bi-brightness-high-fill");
const header = document.querySelector("header");
const textos = document.querySelectorAll("p, h1, h2, h3, span, cite, a, q");
const menu = document.querySelector('.menu');

check.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  header.classList.toggle("dark");
  sun.classList.toggle("white-color");
  menu.classList.toggle("dark"); // corrigido para toggle

  textos.forEach(el => el.classList.toggle("white-color"));
});
