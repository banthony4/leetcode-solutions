/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0') return '0';
    
    const res = new Array(num1.length + num2.length).fill(0);
    
    let curIdx = res.length - 1;
    
    for(let i = num1.length - 1; i >= 0; i--){
        let idx = curIdx--;
        for(let j = num2.length-1; j >= 0; j--){
            const prod = num1[i]*num2[j]+res[idx];
            res[idx] = prod%10;
            res[--idx] += Math.floor(prod / 10);
        }
    }
    
    return res.join('').replace(/^0+/, '');
};