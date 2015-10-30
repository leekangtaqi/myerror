var util = require('util');
function myError(opt_code, opt_message){
    var code = opt_code;
    var message = opt_message;
    !message && (message = opt_code) && (code = null);
    console.log(message)
    Error.captureStackTrace(this, myError);
    if(message in myError.Code){
        message = myError.Code[message];
        code = myError.Type[message]
    }
    this.message = message;
    this.code = code;
}
myError.Type = {};
myError.Code = {};
var err = myError.prototype;
myError.register = function(type, code){
    myError.Type[type] = code;
    myError.Code[code] = type;
    buildAction();
};
function buildAction(){
    var types = Object.keys(myError.Type);
    for(var i=0, len=types.length; i<len; i++){
        var type = types[i], code = myError.Type[types[i]];
        myError[type] = code;
        myError[code] = type;
    }
}
module.exports = myError;