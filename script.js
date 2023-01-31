let senha= ""

// gera senha(s)
function gerar(){
    let caracteres= "abcdefgihjklmnopqrstuvwxyz"
    let num = document.querySelector("#num")
    let sim = document.querySelector("#sim")
    let mai = document.querySelector("#mai")
    let quantC= document.querySelector("#quantC").value
    let quantS= document.querySelector("#quantS").value
    let mostra= document.querySelector("#mostra")

    // verifica os checkbox selecionados e adicona em caracteres
    if(num.checked){
        caracteres += "1234567890"
    }
    if(sim.checked){
        caracteres += "!@#$%&"
    }
    if(mai.checked){
        caracteres += "ABCDEFGIHJKLMNOPQRSTUVWXYZ"
    }

    // gera quantidade de senhas desejadas
    for (let y = 0; y < quantS; y++) {
        // gera senha com os caracteres selecionados
        for (let x = 0; x < quantC; x++) {
            senha += caracteres.charAt(Math.random() * caracteres.length)
        }
        // quebra linha entre uma linha e outra
        senha += "<br>" 
    }

    // exibe as senhas na tela
    mostra.innerHTML= senha
    senha= ""
}

// limpa senhas da tela
function limpa(){
    mostra.innerHTML= ""
}