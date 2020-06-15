class PROGRAM{
    parse(node){
        this.loc = node.loc;
        this.sourceType = node.sourceType;
        this.body = [];
        if(this.sourceType === 'script'){
            for (let item of node.body){
                let temp = new STATEMENTLISTITEM();
                this.body.push(temp);
                temp.parse(item);
            }
        } else {
            for(let item of node.body){
                let temp = new MODULEITEM();
                this.body.push(temp);
                temp.parse(item);
            }
        }
    }
}

module.exports = PROGRAM;

const STATEMENTLISTITEM = require("./STATEMENTLISTITEM");
const MODULEITEM = require("./MODULEITEM");