import cipher from './cipher.js';

/*console.log(cipher);*/

const btnCodificar = document.getElementById("codificar");
btnCodificar.addEventListener("click", codificar);

function codificar(eventoDeClique){
  eventoDeClique.preventDefault();

    let msgParaCod = String(document.getElementById("msgCod").value);
    let offsetCod = Number(document.getElementById("offsetCod").value);
    
    const resultMsgCod=cipher.encode (offsetCod, msgParaCod);
    document.getElementById("resultCod").innerHTML=resultMsgCod;    
  
}

const btnDecodificar = document.getElementById("decodificar");
btnDecodificar.addEventListener("click", decodificar);

function decodificar(eventoDeClique){
    eventoDeClique.preventDefault()
   
    let msgParaDecod = String(document.getElementById("msgDecod").value);
    let offsetCod = Number(document.getElementById("offsetDecod").value);

    const resultMsgDecod=cipher.decode(offsetCod,msgParaDecod);
    document.getElementById("resultDecod").innerHTML=resultMsgDecod; 
}