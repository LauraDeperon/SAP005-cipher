const tamAlfabeto=26;
const cipher = {
  encode (offsetCod,msgParaCod){
    let resultMsgCod="";
    
    for (let i = 0; i < msgParaCod.length; i++) {
      const codASC = msgParaCod.charCodeAt(i);
      let MsgCod = "";
      
      if (codASC >= 65 && codASC <= 90) {
        let cod1letra=65;
        const desloc = ((codASC-cod1letra+offsetCod)%tamAlfabeto)+cod1letra;
        console.log(desloc);
        MsgCod=String.fromCharCode(desloc);
        console.log(MsgCod);
      } /*else if (codASC >= 97 && codASC <= 122) {
        let cod1letra=97;
        const desloc = ((codASC-cod1letra+offsetCod)%tamAlfabeto)+cod1letra;
        console.log(desloc);
        MsgCod=String.fromCharCode(desloc);
        console.log(MsgCod);
      }*/ else if (codASC ===32){
        codASC;
        MsgCod=String.fromCharCode(codASC);
        console.log(MsgCod);
      } 
      else{
       alert("Digite apenas os caracteres aceitos!");
       window.location.reload();
       break;
      }
      resultMsgCod += MsgCod;
    }
    return resultMsgCod;
  },
  
  decode (offsetDecod,msgParaDecod){
    let resultMsgDecod="";
    
    for (let i = 0; i < msgParaDecod.length; i++) {
      const codASC = msgParaDecod.charCodeAt(i);
      let MsgDecod = "";
      
      if (codASC >= 65 && codASC <= 90) {
        let cod1letra=65;
        const desloc = ((codASC+cod1letra-offsetDecod)%tamAlfabeto)+cod1letra;
        console.log(desloc);
        MsgDecod=String.fromCharCode(desloc);
        console.log(MsgDecod);
      } /*else if (codASC >= 97 && codASC <= 122) {
        let cod1letra=97;
        const desloc = ((codASC+cod1letra-offsetDecod)%tamAlfabeto)+cod1letra;
        console.log(desloc);
        MsgDecod=String.fromCharCode(desloc);
        console.log(MsgDecod);
      }*/ else if (codASC ===32){
        codASC;
        MsgDecod=String.fromCharCode(codASC);
        console.log(MsgDecod);
      } else{
       alert("Digite apenas os caracteres aceitos!");
       window.location.reload();
       break;
      }
      resultMsgDecod += MsgDecod;
    }
    return resultMsgDecod;
  }
}
export default cipher;




