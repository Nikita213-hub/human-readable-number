module.exports = function toReadable (number) {
  let readableNums = {
    0 : "zero",1 : "one",2 : "two",3 : "three",4 : "four",5 : "five",6 : "six",7 : "seven",8 : "eight",9 : "nine",10 : "ten",
    11 : "eleven",12 : "twelve",13 : "thirteen",14 : "fourteen",15 : "fifteen",16 : "sixteen",17 : "seventeen",18 : "eighteen",
    19 : "nineteen",20 : "twenty",30 : "thirty",40 : "forty",50 : "fifty",60 : "sixty",70 : "seventy",80 : "eighty",90 : "ninety"
  };
  let arr = number.toString().split('');
  
  if (number <= 20) {
   return readableNums[number];
  }
  
  if (number > 20 && number < 100) {
   return `${readableNums[arr[0] * 10]} ${readableNums[arr[1]]}`;
  }  
  
  if (number > 99) {
   if (arr[1] === '0' && arr[2] === '0') {
       return `${readableNums[arr[0]]} hundred`;
   }
  }
  
  if (arr[1] >= 0 && arr[1] <= 1) {
   let strToNum = Number(arr[1].toString() + arr[2].toString());
   
   if (readableNums.hasOwnProperty(strToNum)) {
    return `${readableNums[arr[0]]} hundred ${readableNums[strToNum]}`;
   }
  }
  
  if ( number > 119 && arr[2] === '0' && arr[1] !== '0') {
   return `${readableNums[arr[0]]} hundred ${readableNums[arr[1] * 10]}`;
  }
  
  if (number > 120) {
   return `${readableNums[arr[0]]} hundred ${readableNums[arr[1] * 10]} ${readableNums[arr[2]]}`;
  }
}
