module.exports = function reverse (n) {
      let a = Math.abs(n).toString();
      return a.split('').reverse().join('')
};