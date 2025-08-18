
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

            option.forEach(option => {
                option.classList.remove('active');
            });
            options.classList.add('active')
        });
    });
});

// cards
const section = document.querySelector(".cards-container");

function createCard(textTitulo, url, textParagraph) {
  const card = document.createElement("div");
  card.classList.add("card");
  
  const cardHeader = document.createElement("div");
  cardHeader.classList.add('card-header')
  cardHeader.style.display = "flex";
  cardHeader.style.justifyContent = "space-between";
  cardHeader.style.alignItems = "center";

  const titulo = document.createElement("span");
  titulo.textContent = `${textTitulo}`;
  titulo.style.fontWeight = "bold";

  const cardHeaderOptions = document.createElement("span");
  cardHeaderOptions.classList.add('card-options')
  cardHeaderOptions.textContent = '⋮';

  cardHeader.appendChild(titulo);
  cardHeader.appendChild(cardHeaderOptions);

  const cardImg = document.createElement("div");
  cardImg.classList.add("card-img");
  cardImg.style.backgroundImage = `url('${url}')`;
  cardImg.style.height = "270px";
  cardImg.style.backgroundSize = "cover";
  cardImg.style.backgroundPosition = "center";

  const cardText = document.createElement("div");
  cardText.classList.add("card-text");

  const text = document.createElement("p");
  text.innerHTML = `${textParagraph}`;

  cardText.appendChild(text);

  card.append(cardHeader, cardImg, cardText); 
  section.appendChild(card);
}

// Exemplo de uso
createCard(
  "AAA", 
  "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Sitemap-BG-Image:VP1-539x349", 
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quisquam alias odit eaque porro cum magnam cumque aspernatur sapiente voluptatibus, aliquam praesentium deserunt, animi labore ex soluta voluptatum quos itaque?" 

);
createCard(
  "AAA", 
  "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Sitemap-BG-Image:VP1-539x349", 
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quisquam alias odit eaque porro cum magnam cumque aspernatur sapiente voluptatibus, aliquam praesentium deserunt, animi labore ex soluta voluptatum quos itaque?" 
);

const check = document.getElementById("checkbox");
const sun = document.querySelector(".bi-brightness-high-fill");
const assets_background = document.querySelector(".assets_background");

const textos = document.querySelectorAll("p, h1, h2, h3, span, cite, a, q");

check.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  sun.style.color = "#fff";
  // assets_background.classList.toggle("white-background");

  textos.forEach(el => el.classList.toggle("white-color"));
  
});

