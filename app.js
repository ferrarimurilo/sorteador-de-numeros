function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    desativaBotaoReiniciar();
}

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;    

    if(de>=ate){
        reiniciar();
        alert('O número inferior deve ser menor que o número superior!!');
        return;
        }if(quantidade>(ate-de)){
           reiniciar();
           alert('O intervalo precisa ser maior que o número de sorteios desejado!!');
           return;
        }else{
               for(let i = 0; i < quantidade; i++){
                numero = obterNumeroAleatorio(de,ate);
                    while(sorteados.includes(numero)){
                       numero = obterNumeroAleatorio(de,ate);
                   }
                   sorteados.push(numero);
                 }
    
            }
 
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    ativarBotaoReiniciar();
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ativarBotaoReiniciar(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
}
}

function desativaBotaoReiniciar(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao')){
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
}
}
