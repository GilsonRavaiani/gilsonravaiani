let botaoRetornar = document.getElementById("botao-retornar");

botaoRetornar.addEventListener("click", function() {

alert("Retornando a página principal")

window.location.href = "index.html";

});

const botao = document.getElementById("botao-retornar");

botao.addEventListener("mouseenter", () => {

    botao.style.cursor = "pointer";
});
