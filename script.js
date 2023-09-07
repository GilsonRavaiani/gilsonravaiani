// Seletor para o botão de retorno
var botaoRetornar = document.getElementById("botao-retornar");

// Adiciona um evento de clique ao botão
botaoRetornar.addEventListener("click", function() {
    // Redireciona o usuário para o index.html (ou outra página desejada)
    window.location.href = "index.html";
});

// Obtém uma referência para o botão
const botao = document.getElementById("botao-retornar");

// Adiciona um ouvinte de evento de passagem do mouse
botao.addEventListener("mouseenter", () => {
    // Altera o estilo do cursor para 'pointer' (mãozinha)
    botao.style.cursor = "pointer";
});

