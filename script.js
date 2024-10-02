
const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
button.addEventListener ('click', function (){
    const atual = document.querySelector ('.ativo');
    const proximoPasso = 'passp-' + this.getAttribute ('data-proximo');

    atual.classList.remove('ativo');
    Document.getElementById(proximoPasso).classlist.add ('ativo');
})
})