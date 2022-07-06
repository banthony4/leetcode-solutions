/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let q = [n]
    const visited = new Set()
    let steps = 1;
    
    while(q.length){
        const size = q.length;
        for (let i = 0; i < size; i++) {
          const cur = q.shift();
          for (let j = 1; j ** 2 <= cur; j++) {
            const diff = cur - j ** 2;
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