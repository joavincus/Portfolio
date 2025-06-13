function typeWriter(elemento) {
      const textoArray = elemento.innerHTML.split('');
      elemento.innerHTML = '';
      textoArray.forEach((letra, i) => {
        console.log(i)
        setTimeout(() => elemento.innerHTML += letra, 40 * i);
      });
    }

    const textAboutMe = document.querySelector(".conteudo-principal_texto_paragrafo");
    typeWriter(textAboutMe);


const button = document.getElementById("conteudo-principal_buttons");

setTimeout(() => {
  button.style.opacity = 1;
}, 40 * 129); 


// elementos surgir na tela com scroll
const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting === true){
      entry.target.classList.add('show')
    }
  })
})

// else {
//       entry.target.classList.remove('show')
//     }

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))
