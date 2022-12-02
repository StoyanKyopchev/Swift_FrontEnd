var numbers = [8,0,7,6,1,3,9,-1,2];
var i;
var j;
var tempValue;
var hasChanged;


for(j = 0; ; j++) {
    hasChanged = false;

    for(i = 0; i < numbers.length-1; i++) {

        if(numbers[i] > numbers[i+1]) {

            tempValue = numbers[i+1];
            numbers[i+1] = numbers [i];
            numbers [i] = tempValue;
            hasChanged = true;

        }
    }

    if(hasChanged === false) {
        break;
    }
}

console.log("Sorted: " + numbers);
