// este event listener permite que o doom carrege totalmente, evitando possiveis erros, é melhor colocar sempre.
document.addEventListener("DOMContentLoaded", (event) => {
    //depois de o doom carregar criamos o código dentro do evento.

    //SCRIPT DE THEMES
    var selectHTML = document.getElementById('themes') // linha que identifica o <select> dentro do html

    // vai criar um evento sempre que detetar uma alteracao no selectHTML
    selectHTML.addEventListener('change', function() {
        const optionSelected = selectHTML.options[selectHTML.selectedIndex] // aqui pegamos na informacao de qual opcao esta selecionada
        const theme = optionSelected.getAttribute('name'); // aqui extraimos o nome da opcao.

        switch (theme) {
            case 'moon-theme':
                document.body.style.background = 'linear-gradient(to bottom, rgb(34, 0, 44), rgb(0, 5, 46))';
                break;
            case 'lime-theme':
                document.body.style.background = 'linear-gradient(to bottom, rgb(24, 66, 49), rgb(68, 201, 101))';
                break;
            case 'cherry-theme':
                document.body.style.background = 'linear-gradient(to bottom, rgb(71, 19, 19), rgb(199, 0, 60))';
                break;
            case 'dark-theme':
                document.body.style.background = 'linear-gradient(to bottom, rgb(10, 10, 10), rgb(41, 41, 41))';
                break;
            default:
                document.body.style.background = 'linear-gradient(to bottom, rgb(10, 10, 10), rgb(41, 41, 41))';
                break;
        }
    })







    //Contador
    var TempoRestante = document.getElementById('tempo')

    for(var i = 10; i>0; i--){
        console.log(i)
    }
});