console.log('First Home Work');
console.log('------Printing the table within bounds-------');
function printTable(param) {
for(var i = 1; i <= 10; i++) {
    console.log(param + " * " + i + " = " + i*param);
    }
}

printTable(2);


console.log('------Find odd, even numbers from an array and bounds.---------');
var odd = [];
var even = [];

function findOddEvenNumber(param) {
    for(var i = 1; i <= param.length; i++) {
        if(param[i] % 2 === 1) {
        odd.push(param[i]);
        } else {
        even.push(param[i]);
        }
    }
    console.log("Odd number:  "+ odd);
    console.log("Even number:  "+ even);
}
   
findOddEvenNumber([1, 2, 3, 4, 5, 6 ,7 ,8 ,9]);



console.log('------Identifying Prime Number from an array and upper bound and lower bound---------');
   function isPrime(n){
     var divisor = 2;
   
     while (n > divisor){
       if(n % divisor == 0){
        return false; 
       }
       else
         divisor++;
     }
     return true;
   }
   
   var primeNum = [];
   function findAllPrimeNumbers(param){
    for(var i = 0; i <= param.length; i++) {
    if(isPrime(param[i])) {
     primeNum.push(param[i]);
    }
    }
    console.log("Prim number : " + primeNum);
   }
   findAllPrimeNumbers([1, 2, 3, 137, 237, 12, 23, 45, 37, 49]);