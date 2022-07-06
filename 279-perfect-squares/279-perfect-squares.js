/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let q = [n]
    const visited = new Set()
    let steps = 1;
    let squareNums = []
    for(let i = 1; i**2 <= n; i++){
        squareNums.push(i**2)
    }
    
    
    while(q.length){
        const size = q.length;
        for (let i = 0; i < size; i++) {
          const cur = q.shift();
          for (let j = 0; j < squareNums.length; j++) {
            const diff = cur - squareNums[j];
            if (diff === 0) {
              return steps;
            }
            if (!visited.has(diff)) {
              visited.add(diff);
              q.push(diff);
            }
          }
        }
        steps++;
    }
    return steps;
};