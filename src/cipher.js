const cipher = {
  // ...
};

export default cipher;

const btnCodificar = document.getElementById("codificar")
btnCodificar.addEventListener("click", codificar)

function codificar(eventoDeClique){
  eventoDeClique.preventDefault()

  let msgCod = document.getElementById("msgCod").value;
  let offsetCod = document.getElementById("offsetCod").value;
  const codASC = msgCod.charCodeAt(0)
  const desloc = ((codASC-65+offsetCod)%26)+65
  document.getElementById("resultCod").innerHTML = String.fromCharCode(desloc)
}

const btnDecodificar = document.getElementById("decodificar")
btnDecodificar.addEventListener("click", decodificar)

function decodificar(eventoDeClique){
  eventoDeClique.preventDefault()

  let msgCod = document.getElementById("msgDecod").value;
  let offsetCod = document.getElementById("offsetDecod").value;
  const codASC = msgCod.charCodeAt(0)
  const desloc = codASC-65-offsetCod%26+65
  document.getElementById("resultDecod").innerHTML = String.fromCharCode(desloc)
}
