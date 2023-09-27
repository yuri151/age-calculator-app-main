function calcularIdade(){
   
    let dia =  document.getElementsByTagName("input")[0]
    let mes =  document.getElementsByTagName("input")[1]
    let ano =  document.getElementsByTagName("input")[2]
    
    let erroDia = document.getElementById("errodia")

    let now = new Date()
    let bissexto = 0
    let diaAtual = now.getDate() 
    let mesAtual = now.getMonth() +1
    let anoAtual = now.getFullYear()

    const lista30dias = [4,6,9,11]

    dia = Number(dia.value)
    mes = Number(mes.value)
    ano = Number(ano.value)

    DiaTotalMes = mes in lista30dias? 30 : 31
    

    if(dia == " " || mes == " " || ano == " "|| dia > 31 || mes > 12 || ano > anoAtual){
            erroDia.innerText = "TEST"
            window.alert("ERRO")
        }

    else{

        if(mes == 2){
            bissexto = ano %4 == 0 ? 29: 28
            DiaTotalMes = bissexto
            window.alert(`${DiaTotalMes}`)

            if(dia > DiaTotalMes  ){
                window.alert("ERRO")
                
            }

            else{
                ano = anoAtual - ano -1
                mes =  0
                dia = diaAtual - dia
    
                window.alert(`M1 FIM dias ${dia} meses ${mes} e idade ${ano}`)
            }     
        }

        else{

            if(mesAtual < mes){

                ano = anoAtual - ano -1
                mes =  12- (mes - mesAtual) 
                dia = diaAtual - dia

                window.alert(`M FIM dias ${dia} meses ${mes} e idade ${ano}`)

            }

            else if(mes == mesAtual){

                ano = anoAtual - ano -1
                mes =  0
                dia = diaAtual - dia

                window.alert(`M1 FIM dias ${dia} meses ${mes} e idade ${ano}`)
            }

            else{
                
                ano = anoAtual - ano -1
                mes = ( 12- (mes - mesAtual))-12
                dia = diaAtual - dia

                window.alert(`FIM dias ${dia} meses ${mes} e idade ${ano}`)
            }
        }
    }
}
