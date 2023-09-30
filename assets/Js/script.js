function calcularIdade(){
//    ideia utilizar uma lista e um  dicionario e for para diminuir o codigo a lista para fazer o for e o dicionario para receber esses valores 
    let dia =  document.getElementsByTagName("input")[0]
    let mes =  document.getElementsByTagName("input")[1]
    let ano =  document.getElementsByTagName("input")[2]
    
    let erroDia = document.getElementById("errodia")
    let erroMes = document.getElementById("erromes")
    let erroAno = document.getElementById("erroano")

    let textodia = document.getElementById("texto-dia")
    let textomes = document.getElementById("texto-mes")
    let textoano = document.getElementById("texto-ano")

    let esdia= document.getElementById("dia")
    let esmes= document.getElementById("mes")
    let esano = document.getElementById("ano")


   
    let bissexto 
    let now = new Date()
    let diaAtual = now.getDate() 
    let mesAtual = now.getMonth() +1
    let anoAtual = now.getFullYear()

    const lista30dias = [4,6,9,11]

    let diaValor = Number(dia.value)
    let mesValor = Number(mes.value)
    let anoValor = Number(ano.value)
    
    let msg
    let erros

    let margin_erros

    erroDia.innerText = ""
    erroMes.innerText = ""
    erroAno.innerText = ""

    dia.style.borderColor = "hsl(0, 0%, 94%)"
    mes.style.borderColor = "hsl(0, 0%, 94%)"
    ano.style.borderColor = "hsl(0, 0%, 94%)"

    textodia.style.color = "black"
    textomes.style.color = "black"
    textoano.style.color = "black"

    erros = document.getElementById("erros")
    erros.style.display = "none"

    DiaTotalMes = mesValor in lista30dias? 30 : 31


    if(diaValor == " " &&  mesValor == " " && anoValor == " "){
            erroDia.innerText = "This field is required"
            erroMes.innerText = "This field is required"
            erroAno.innerText = "This field is required"

            dia.style.borderColor = "hsl(0, 100%, 67%)"
            mes.style.borderColor = "hsl(0, 100%, 67%)"
            ano.style.borderColor = "hsl(0, 100%, 67%)"

            textodia.style.color = "hsl(0, 100%, 67%)"
            textomes.style.color = "hsl(0, 100%, 67%)"
            textoano.style.color = "hsl(0, 100%, 67%)"

            erros.style.display = "block"


    }

    else if (diaValor > 31 && mesValor > 12 && anoValor > anoAtual ){
        erroDia.innerText = "Must be a valid day"
        erroMes.innerText = "Must be a valid month"
        erroAno.innerText = "Must be in the past"

        dia.style.borderColor = "hsl(0, 100%, 67%)"
        mes.style.borderColor = "hsl(0, 100%, 67%)"
        ano.style.borderColor = "hsl(0, 100%, 67%)"

        textodia.style.color = "hsl(0, 100%, 67%)"
        textomes.style.color = "hsl(0, 100%, 67%)"
        textoano.style.color = "hsl(0, 100%, 67%)"

        erros.style.display = "block"
    }


    else if(diaValor > 31 || diaValor == " "){
        msg = diaValor == " "? "This field is required": "Must be a valid day"
        erroDia.innerText =  msg

        dia.style.borderColor = "hsl(0, 100%, 67%)"
        mes.style.borderColor = "hsl(0, 100%, 67%)"
        ano.style.borderColor = "hsl(0, 100%, 67%)"

        textodia.style.color = "hsl(0, 100%, 67%)"
        textomes.style.color = "hsl(0, 100%, 67%)"
        textoano.style.color = "hsl(0, 100%, 67%)"

        erros.style.display = "block"

    }
    else if(mesValor > 12 || mesValor == " "){
        msg = mesValor == " "? "This field is required": "Must be a valid month"
        erroMes.innerText =  msg

        dia.style.borderColor = "hsl(0, 100%, 67%)"
        mes.style.borderColor = "hsl(0, 100%, 67%)"
        ano.style.borderColor = "hsl(0, 100%, 67%)"

        textodia.style.color = "hsl(0, 100%, 67%)"
        textomes.style.color = "hsl(0, 100%, 67%)"
        textoano.style.color = "hsl(0, 100%, 67%)"

        erros.style.display = "block"
        
        margin_erros = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 530? "95px": "130px"
        erroMes.style.marginLeft = margin_erros

    } 
     else if(anoValor > anoAtual || anoValor == " " ){
        msg = anoValor == " "? "This field is required": "Must be in the past"
        erroAno.innerText =  msg
        
        dia.style.borderColor = "hsl(0, 100%, 67%)"
        mes.style.borderColor = "hsl(0, 100%, 67%)"
        ano.style.borderColor = "hsl(0, 100%, 67%)"

        textodia.style.color = "hsl(0, 100%, 67%)"
        textomes.style.color = "hsl(0, 100%, 67%)"
        textoano.style.color = "hsl(0, 100%, 67%)"

        erros.style.display = "block"
        margin_erros = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 530? "180px": "225px"
        erroMes.style.marginLeft = margin_erros

    }

    else{

        if(mesValor == 2){
            bissexto = anoValor %4 == 0 ? 29: 28
            DiaTotalMes = bissexto
            
            if(diaValor > DiaTotalMes || diaValor == " "){
                msg = diaValor == " "? "This field is required": "Must be a valid day"
                erroDia.innerText =  msg
                
                dia.style.borderColor = "hsl(0, 100%, 67%)"
                mes.style.borderColor = "hsl(0, 100%, 67%)"
                ano.style.borderColor = "hsl(0, 100%, 67%)"
    
                textodia.style.color = "hsl(0, 100%, 67%)"
                textomes.style.color = "hsl(0, 100%, 67%)"
                textoano.style.color = "hsl(0, 100%, 67%)"
                erros.style.display = "block" 
            }

            else{
                anoValor = anoAtual - anoValor -1
                mesValor =  0
                diaValor = diaAtual - diaValor
                
                esdia.innerText = diaValor
                esmes.innerText = mesValor
                esano.innerText = anoValor
                
            }     
        }

        else{

            if(mesAtual < mesValor){

                anoValor = anoAtual - anoValor -1
                mesValor =  12- (mesValor - mesAtual) 
                diaValor = diaAtual - diaValor

                esdia.innerText = diaValor
                esmes.innerText = mesValor
                esano.innerText = anoValor

            }

            else if(mesValor == mesAtual){

                anoValor = anoAtual - anoValor 
                mesValor =  0
                diaValor = diaAtual - diaValor

                esdia.innerText = diaValor
                esmes.innerText = mesValor
                esano.innerText = anoValor

            }

            else{
                
                anoValor = anoAtual - anoValor 
                mesValor = ( 12- (mesValor - mesAtual))-12
                diaValor = diaAtual - diaValor

                esdia.innerText = diaValor
                esmes.innerText = mesValor
                esano.innerText = anoValor
            }
        }
    }
}
