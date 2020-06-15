module.exports = class OBJECTEXPRESSION{
    parse(node){
        this.properties = [];
        for(let property of node.properties){
            let temp = new PROPERTY();
            this.properties.push(temp);
            temp.parse(property);
        }
    }
}