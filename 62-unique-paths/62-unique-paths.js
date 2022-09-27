/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let currentRow = new Array(n);
    // Assigning a 1 to matrix[0][0] is simply a shortcut that skips some later computation
    // as matrix[i][0] will never change in this iterative process
    for (let i = 0; i < n; i++) {
        currentRow[i] = 1;
    }
    for (let row = 1; row < m; row++) {
        for (let i = 1; i < n; i++) {
            currentRow[i] += currentRow[i - 1];
        }
    }
    return currentRow[n - 1];
};