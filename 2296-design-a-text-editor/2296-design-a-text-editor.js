
var TextEditor = function() {
    this.left = "";
    this.right = "";
};

/** 
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function(text) {
    this.left += text;
};

/** 
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function(k) {
    let start = Math.max(0,this.left.length-k);
    let len=0;
    if(this.left.length-start>0){
        len = this.left.length-start;
    }
    this.left=this.left.substring(0,start);
    return len;
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function(k) {
    let start = Math.max(0,this.left.length-k);
    this.right = this.left.substring(start)+this.right;
    this.left=this.left.substring(0,start);
    
    let leftStart =  Math.max(0,this.left.length-10);
    let str = this.left.substring(leftStart,this.left.length);
    return str;
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function(k) {
    let start = Math.min(this.right.length,k);
    this.left=this.left+this.right.substring(0,start)
    this.right=this.right.substring(start);
    
    let leftStart =  Math.max(0,this.left.length-10);
    let str = this.left.substring(leftStart,this.left.length);
    return str
};

/** 
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */