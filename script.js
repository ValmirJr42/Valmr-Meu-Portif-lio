// script.js
document.getElementById('contatoForm').addEventListener('submit', function(event) {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    if (!nome || !email) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        event.preventDefault();
    }
});




