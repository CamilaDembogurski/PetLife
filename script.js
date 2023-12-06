//querySelectorAll pega todos os elementos da página, enquanto o querySelector pega apenas o primeiro elemento
var elementosDuvida = document.querySelectorAll('.duvida')

//forEach: é executada uma vez para cada elemento
elementosDuvida.forEach(function(duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa')
        //o toggle coloca a classe se ela não existir e a remove se existir
    })
})

var menu = document.querySelector('#menu')
var line1 = document.querySelector('.line1')
var line2 = document.querySelector('.line2')
var line3 = document.querySelector('.line3')
var navegacao = document.querySelector('#navegacao')

menu.addEventListener('click', function(menu){
    navegacao.classList.toggle('aparecer')
})