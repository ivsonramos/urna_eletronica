let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = '';

function comecarEtapa() {

    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for (let i=0; i<etapa.numeros;i++) {
        if(i === 0) {
            numeroHtml += '<div class="number pisca"></div>';
        } else {
        numeroHtml += '<div class="number"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.number == numero) {
            return true;
        } else {
            return false;
        }
    });
    if(candidato.length > 0) {
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.name}<br/>Partido: ${candidato.broken}`;

        let fotosHtml = '';
        for(let i in candidato.fotos) {
            fotosHtml += `<div class="d-1-image"><img src="img/${candidato.photograph[i].url}" alt="Imagem Presidente"/>${candidato.photograph[i].legenda}</div>`;
        }
        lateral.innerHTML = fotosHtml;
    }
}

function clicou(n) {
    let elNumero = document.querySelector('.number.pisca');
    if(elNumero !== null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }
        
    }
}

function brancon() {
    alert("clicou em BRANCO!");
}

function corrige() {
    alert("clicou em CORRIGE!");
}

function confirma() {
    alert("clicou em CONFIRMA!");
}

comecarEtapa();