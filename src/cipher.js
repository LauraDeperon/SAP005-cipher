const tamAlfabeto=26;

const cipher = {
  encode (offsetCod,msgParaCod){
    let resultMsgCod=""; 
    if (typeof offsetCod == "number" && typeof msgParaCod == "string"){
        for (let i = 0; i < msgParaCod.length; i++) {
          const codASC = msgParaCod.charCodeAt(i);
          let MsgCod = "";   
          if (codASC >=65 && codASC <= 90){
            let cod1letra=65;
            const desloc = ((codASC-cod1letra+Math.abs(offsetCod))%tamAlfabeto)+cod1letra;
            MsgCod=String.fromCharCode(desloc);
            resultMsgCod += MsgCod;
          }else if (codASC >=97 && codASC <= 122){
            let cod1letra=97;
            const desloc = ((codASC-cod1letra+Math.abs(offsetCod))%tamAlfabeto)+cod1letra;
            MsgCod=String.fromCharCode(desloc);
            resultMsgCod += MsgCod;
          }else{
            MsgCod=String.fromCharCode(codASC);
            resultMsgCod += MsgCod;
          }
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
        if (codASC >=65 && codASC <= 90){
          let codUltimaLetra=90;
          const desloc =((codASC-codUltimaLetra-Math.abs(offsetDecod))%tamAlfabeto)+codUltimaLetra;
          MsgDecod=String.fromCharCode(desloc);
          resultMsgDecod += MsgDecod;
        }else if (codASC >=97 && codASC <= 122){
          let codUltimaLetra=122;
          const desloc = ((codASC-codUltimaLetra-Math.abs(offsetDecod))%tamAlfabeto)+codUltimaLetra;
          MsgDecod=String.fromCharCode(desloc);
          resultMsgDecod += MsgDecod;
        } else {
          MsgDecod=String.fromCharCode(codASC);
          resultMsgDecod += MsgDecod;
        }
      }
    }else {
      throw new TypeError();
    }  
    return resultMsgDecod;
  }
}
export default cipher;




