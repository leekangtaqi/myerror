var util = require('util');
function myError(opt_code, opt_message){
    var code = opt_code;
    var message = opt_message;
    !message && (message = opt_code) && (code = null);
    Error.captureStackTrace(this, myError);
    this.message = message;
    this.code = code;
}
var err = myError.prototype;
myError.register = function(type, code){
    myError[type] = code;
    myError[code] = type
};
module.exports = myError;