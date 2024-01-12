function DetectSqlInjection(inputString) {
    let sqlInjectionPattern = /(%27)|(')|(--)|(%23)|(#)/i;
    const sqlInjectionPattern1 = /(\bSELECT\b|\bINSERT\b|\bUPDATE\b|\bDELETE\b|\bDROP\b)/i;
    var check = sqlInjectionPattern.test(inputString) | sqlInjectionPattern1.test(inputString);
    if (check) {
        // alert("Potential SQL Injection detected!");
        return true;
    }
    return false;
}

export default DetectSqlInjection