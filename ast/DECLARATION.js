const CLASSDECLARATION = require("./CLASSDECLARATION");
const FUNCTIONDECLARATION = require("./FUNCTIONDECLARATION");
const VARIABLEDECLARATION = require("./VARIABLEDECLARATION");

module.exports = class DECLARATION {
    parse(node) {
        if (node.type === "ClassDeclaration") {
            this.type = new CLASSDECLARATION();
            this.type.parse(node);
        } else if (node.type === "FunctionDeclaration") {
            this.type = new FUNCTIONDECLARATION();
            this.type.parse(node);
        } else {
            this.type = new VARIABLEDECLARATION();
            this.type.parse(node);
        }
    }
}