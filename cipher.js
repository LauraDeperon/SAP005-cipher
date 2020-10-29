const cipher = {
  // ...
};

export default cipher;

const tamAlfabeto=26;
let resultMsgCod="";
const btnCodificar = document.getElementById("codificar");
btnCodificar.addEventListener("click", encode);
let resultMsgDecod="";
const btnDecodificar = document.getElementById("decodificar");
btnDecodificar.addEventListener("click", decode);

function encode(eventoDeClique){
  eventoDeClique.preventDefault();
  
  let msgCod = document.getElementById("msgCod").value;
  let offsetCod = Number(document.getElementById("offsetCod").value);
  
  for (let i = 0; i < msgCod.length; i++) {
    const codASC = msgCod.charCodeAt(i);
    let MsgCod = "";

    if (codASC >= 65 && codASC <= 90) {
      let cod1letra=65;
      const desloc = ((codASC-cod1letra+offsetCod)%tamAlfabeto)+cod1letra;
      console.log(desloc);
      MsgCod=String.fromCharCode(desloc);
      console.log(MsgCod);
    } else if (codASC >= 97 && codASC <= 122) {
      let cod1letra=97;
      const desloc = ((codASC-cod1letra+offsetCod)%tamAlfabeto)+cod1letra;
      console.log(desloc);
      MsgCod=String.fromCharCode(desloc);
      console.log(MsgCod);
    } else if (codASC === 32) {
      MsgCod=String.fromCharCode(" ");
      console.log(MsgCod);
    } else if (codASC === 44) {
      MsgCod=String.fromCharCode(",");
      console.log(MsgCod);
    } else if (codASC === 46) {
      MsgCod=String.fromCharCode(".");
      console.log(MsgCod);
    } else{
     alert("Digite apenas os caracteres aceitos!");
     window.location.reload();
     break;
    }
    resultMsgCod += MsgCod;
  }
  document.getElementById("resultCod").innerHTML=resultMsgCod;
  return resultMsgCod;
}


function decode(eventoDeClique){
  eventoDeClique.preventDefault()
 
  let msgDecod = document.getElementById("msgDecod").value;
  let offsetCod = Number(document.getElementById("offsetDecod").value);
  
  for (let i = 0; i < msgDecod.length; i++) {
    const codASC = msgDecod.charCodeAt(i);
    
    if (codASC >= 65 && codASC <= 90) {
      const desloc = ((codASC-cod1letra-offsetCod)%tamAlfabeto)+cod1letra;
      console.log(desloc);
      let MsgDecod=String.fromCharCode(desloc);
      console.log(MsgDecod);
      resultMsgDecod += msgDecod;
    }
    else if (codASC === 32) {
      let MsgDecod=String.fromCharCode(" ");
      console.log(MsgDecod);
      resultMsgDecod += msgDecod;
    }
    else{
     alert("Digite apenas os caracteres aceitos!");
     window.location.reload();
     break;
    } 
  }
  document.getElementById("resultDecod").innerHTML=resultMsgDecod;
  return resultMsgDecod;
}
