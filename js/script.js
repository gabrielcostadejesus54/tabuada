var botao = document.getElementById('botao')
botao.addEventListener('click', tabuada);

function tabuada(){
    var input1 = document.getElementById('input1')
    var input2 = document.getElementById('input2')
    var content = document.querySelector('.content')

    if(input1.value.length == 0 || input2.value.length == 0){
        alert('[ERRO] Insira os dados corretamente.')
    }else{
        var num1 = Number(input1.value)
        var num2 = Number(input2.value)
        
        content.innerHTML = ''
        for(var i = 0; i <= num2; i++){
            var res = num1 * i

            content.innerHTML += `
            <p>${num1} x ${i} = ${res}</p>
            `
        }
    }
    
    
}
