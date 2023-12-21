export default function make2DArray(numRows, numCols, val) {
    return Array(numRows)
    .fill(null)
    .map(() => new Array(numCols).fill(val));
}