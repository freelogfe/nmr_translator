const antlr4 = require('antlr4/index');


module.exports = class PolicyErrorListener extends antlr4.error.ErrorListener {

    constructor(errors) {
        super();
        this.errors = errors
    }

    syntaxError(rec, sym, line, col, msg, e) {
        // console.log(rec, 'rec');
        // console.log(sym, 'sym');
        // console.log(e, 'e');
        // debugger;
        // this.errors.push(`line:${line},col:${col},msg:${msg}`);
        this.errors.push({
            line, col, msg,
        });
    }
};



