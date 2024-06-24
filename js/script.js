document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();  // Impede o envio padrão do formulário
    window.location.href = "./formulario.html";  // Redireciona para a URL especificada
});
