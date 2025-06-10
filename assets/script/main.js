const boxDesign = document.getElementById('box-design');
const boxTechnology = document.getElementById('box-technology');
const boxAccessibility = document.getElementById('box-accessibility');

const boxes = [boxDesign, boxTechnology, boxAccessibility];

function selectBox(selectedBox) {
  boxes.forEach((box) => {
    if (box === selectedBox) {
      box.style.zIndex = "3";
      box.style.background = "#0d47a1";
      box.style.color = "#fff"
    } else {
    box.style.color = "#0d47a1";
      box.style.zIndex = "1";
      box.style.background = "#fff";
    }
  });
}

// Evento de clique em cada box
boxes.forEach((box) => {
  box.addEventListener("click", (event) => {
    event.stopPropagation(); // impede que o clique propague até o document
    selectBox(box);
  });
});

// Clique fora dos boxes → resetar
document.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.style.zIndex = "0";
    box.style.background = "#fff";
    box.style.color = "#0d47a1"
  });
});

// Máquina de escrever

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ''
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i)
  })
}

  const textAboutMe = document.querySelector(".presentation-paragraph");
  typeWriter(textAboutMe)