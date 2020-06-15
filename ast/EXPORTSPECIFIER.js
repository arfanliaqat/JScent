// interface ExportSpecifier {
//     type: 'ExportSpecifier';
//     exported: Identifier;
//     local: Identifier;
// };

module.exports = class EXPORTSPECIFIER {
    parse(node) {
        this.loc = node.loc;
        this.exported = new IDENTIFIER();
        this.exported.parse(node.exported);

        this.local = new IDENTIFIER();
        this.local.parse(node.local);
    }
}

const IDENTIFIER = require("./IDENTIFIER");