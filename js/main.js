function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null && elemento != null) {
        if (elemento.localName === 'audio') {
            elemento.play();
        }
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');  //  guardar em uma constate uma lista do HTML com a classe .tecla

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];  // guarda em uma constante para armazenar o elemento da lista de teclas
    const instrumento = tecla.classList[1];  // guarda em uma constante com a lista de classes com o valor do índice 1
    // template string
    const idAudio = `#som_${instrumento}`;  //  conforme o contador for alterado, o instrumento vai pegar o valor 1 da classLista

    tecla.onclick = function () {  // atributo onclick vai receber uma função anônima
        tocaSom(idAudio);  // função tocaSom
    }

    tecla.onkeydown = function (e) {
        if (e.code === 'Space' || e.code === 'Enter'){  //  obter o valor da tecla pressionada
            tecla.classList.add('ativa'); 
        }      
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
