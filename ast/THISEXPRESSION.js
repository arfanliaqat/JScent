module.exports = class THISEXPRESSION {
    parse(node){
        this.loc = node.loc;
        this.comments = node.comments;
    }
    evaluate(table) {
        this.loc.evaluate(table);
    }
}