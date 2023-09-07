let botaoRetornar = document.getElementById("botao-retornar");

botaoRetornar.addEventListener("click", function() {

alert("Você está sendo redirecionado para página principal")

window.location.href = "index.html";

});

const botao = document.getElementById("botao-retornar");

botao.addEventListener("mouseenter", () => {

    botao.style.cursor = "pointer";
});

let elementoH1 = document.querySelector("h1");

console.log(elementoH1);