'use strict';
const pesquisarCep =  async (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const preencherFormulario = async (evento) => {
    const cep = evento.target.value;

    const infoCep = await pesquisarCep(cep);

    document.querySelector('#endereco').value = infoCep.logradouro;
    document.querySelector('#numero').value = infoCep.complemento;
    document.querySelector('#bairro').value = infoCep.bairro;
    document.querySelector('#cidade').value = infoCep.localidade;
    document.querySelector('#estado').value = infoCep.uf;

    console.log(infoCep);
}

document
        .querySelector('#cep')
        .addEventListener('focusout', preencherFormulario);

        //invocar
        //preencherFormulario()
        //preencherFormulario()