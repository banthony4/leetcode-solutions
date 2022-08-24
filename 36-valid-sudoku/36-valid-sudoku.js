/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rowRules = new Array(9).fill().map(() => new Set())
  const colRules = new Array(9).fill().map(() => new Set())
  const mixedRules = new Array(9).fill().map(() => new Set())
  
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const curr = board[row][col]
      
      const mixedIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3)

      if (curr === ".") continue  // ignore dots
      
      const a = rowRules[row].has(curr)
      const b = colRules[col].has(curr)
      const c = mixedRules[mixedIdx].has(curr)
      if (a || b || c) return false
      
      rowRules[row].add(curr)
      colRules[col].add(curr)
      mixedRules[mixedIdx].add(curr)
    }
  }
  return true
};