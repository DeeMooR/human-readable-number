module.exports = function toReadable (number) {
  const units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const dozens = ["zero", "one", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  if(number<20) {
    return units[number];
  }
  if((number>=20) && (number<100) && (number%10 === 0)) {
    b= number/10;
    return dozens[b];
  }
  if((number>=20) && (number<100) && (number%10 !== 0)) {
    b= Math.floor(number/10);
    c= number%10;
    return dozens[b] +' '+ units[c];
  }


  if((number>=100) && (number<1000) && (number%100 === 0)) {
    a= number/100;
    return units[a] + " hundred";
  }
  if(((number%100)>=20) && ((number%100)<100) && (number%10 === 0)) {
    a= Math.floor(number/100);
    d= (number/10)%10;
    return units[a] + " hundred " + dozens[d];
  }


  if(((number%100)>=1) && ((number%100)<20)) {
    a= Math.floor(number/100);
    d= number%100;
    return units[a] +' hundred '+ units[d];
  }
  if(((number%100)>=20) && ((number%100)<100)) {
    a= Math.floor(number/100);
    d= number%100;
    b= Math.floor(d/10);
    c= d%10;
    return units[a] +' hundred '+ dozens[b] +' '+ units[c];
  }
}
