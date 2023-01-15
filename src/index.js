module.exports = function reverseq(n) {
    if (n < 0) {
        n = n * (-1)
    }
    let arr = String(n).split('');
    if (arr[arr.length - 1] == '0') {
        arr = arr.slice(0, arr.length - 1)
    }
    return arr.reverse().join('');
}
