/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    /*
      Get absolute value
      convert number to string
      split string
      reverse order
      join it back together
    */
    var str = Math.abs(x).toString().split('').reverse().join('');
    
    /*
      if original value is negative, add "-"
    */
    var rev = Number(x < 0 ? "-"+str : str);
    
    /*
      Set parameter within 32-bit range
      anything outside that range returns "0"
    */
    if(rev > 2**31 || rev < -(2**32)){
        return 0;
    }else{
        return rev;
    }
};
