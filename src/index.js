module.exports = function reverse (n) {
    let res = 0;

    while(n > 0){
        res = (res * 10) + (n % 10);
        n = Math.floor(n / 10);
    }

    return res;
}
