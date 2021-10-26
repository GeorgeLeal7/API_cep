'use strict';
const pesquisarCep =  async (cep) => {
    fetch(url);
    return `CEP Digitado ${cep}`; 
}

const preencherFormulario = () => {
    const cep = document.querySelector('#cep')
    const infoCep = pesquisarCep(cep);

    console.log(infoCep);
}

document
        .querySelector('#cep')
        .addEventListener('focusout', preencherFormulario);

        //invocar
        //preencherFormulario()
        //preencherFormulario()