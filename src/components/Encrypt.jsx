import CryptoJS from "crypto-js";



function EncryptData(data){
    var iv  = CryptoJS.enc.Base64.parse("");
    var key=CryptoJS.SHA256("Message");
    if(typeof data=="string"){
        data=data.slice();
        var encryptedString = CryptoJS.AES.encrypt(data, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
	    });
    }
	else{
        encryptedString = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
	    });  
    }
	return encryptedString.toString();
}

export default EncryptData;