function make2DArray(numRows, numCols, val) {
    return Array(numRows)
    .fill(null)
    .map((e) => new Array(numCols).fill(null));
}