var numbers = [2,4,6,3,2,-123,34,0,8];
var i;
var maxNumber = numbers[0];

for(i = 0; i < numbers.length; i++) {
    if(maxNumber < numbers[i]) {
        maxNumber = numbers[i];
    }
}
console.log(maxNumber);
