const tamAlfabeto=26;
let cod1letra=65;
const cipher = {
  encode (offsetCod,msgParaCod){
    let resultMsgCod="";
    if (typeof offsetCod == "number" && typeof msgParaCod == "string"){
        for (let i = 0; i < msgParaCod.length; i++) {
          const codASC = msgParaCod.charCodeAt(i);
          let MsgCod = ""     
          const desloc = ((codASC-cod1letra+offsetCod)%tamAlfabeto)+cod1letra;
          MsgCod=String.fromCharCode(desloc);
          resultMsgCod += MsgCod;
        }
    }else {
      throw new TypeError();
    }
    return resultMsgCod;
  },
  
  decode (offsetDecod,msgParaDecod){
    let resultMsgDecod="";
    if (typeof offsetDecod == "number" && typeof msgParaDecod == "string"){
      for (let i = 0; i < msgParaDecod.length; i++) {
        const codASC = msgParaDecod.charCodeAt(i);
        let MsgDecod = "";
        const desloc = ((codASC+cod1letra-offsetDecod)%tamAlfabeto)+cod1letra;
        MsgDecod=String.fromCharCode(desloc);
        resultMsgDecod += MsgDecod;
      }
    }else {
      throw new TypeError();
    }  
    return resultMsgDecod;
  }
}
export default cipher;




