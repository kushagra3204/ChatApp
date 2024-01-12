import CryptoJS from "crypto-js";

function DecryptData(encrypted){
    var iv  = CryptoJS.enc.Base64.parse("");
    var key=CryptoJS.SHA256("Message");
    var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
        	  iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    return decrypted.toString(CryptoJS.enc.Utf8)
}

export default DecryptData;