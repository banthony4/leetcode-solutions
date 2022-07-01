/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.q = [];
    this.sum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.q.push(val)
    this.sum += val
    if(this.q.length > this.size){
        this.sum -= this.q.shift()
    }
    
    return this.sum / this.q.length
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */