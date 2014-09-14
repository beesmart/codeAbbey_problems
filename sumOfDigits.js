var arrayOfNumbers = seq.map(Number);
var answers = [];
var result = 0;


function threeToSum(a, b, c){
    sumToWork = (a * b) + c
    return sumToWork
}

for (var i = 0; i < arrayOfNumbers.length; i+=3) {
    threeToSum(arrayOfNumbers[i], arrayOfNumbers[i+1], arrayOfNumbers[i+2]);
    while (sumToWork >= 1){
        remainder = Math.floor(sumToWork % 10);
        result = remainder + result;
        sumToWork = sumToWork / 10;

    }
    answers.push(result)
    result = 0
};

Newanswers = answers.join()
finalAnswers = Newanswers.replace(/,/g,' ')
console.log(finalAnswers);