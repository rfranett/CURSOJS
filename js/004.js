/* laços =capitura item um a um correndo a lista na secuencia  
-forEach*/

let produtos =['blusa','tenis','camiseta','shorts']
blusa =1
tenis =2
camiseta =3
shorts = 4 

produtos.forEach( armario => {

    if (armario === 'tenis'){

    console.log(armario)
    }else {
        console.log("Não é a Blusa")
    }
   
})
