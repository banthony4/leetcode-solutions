/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const currColor = image[sr][sc];
    if(image[sr][sc] === color) return image;
    
    function dfs(img, row, col) {
        if(row >= img.length || row < 0 || col >= img[0].length || col < 0 || img[row][col] != currColor) return;
        img[row][col] = color;
		dfs(img, row-1, col);  
        dfs(img, row+1, col);  
        dfs(img, row, col+1);   
        dfs(img, row, col-1);  
        return img;
    }
    return dfs(image, sr, sc);
};