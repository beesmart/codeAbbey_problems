var arrayOfNumbers = seq.map(Number); var answers = [];
var normal = 18.5;
var overweight = 25;
var obese = 30;

function bmiCalc(weight, height){
    var bmi = weight / (height*height);
    console.log(bmi)
    return bmi;
}

console.log(bmiCalc(80, 1.73))

for (var i = 0; i < arrayOfNumbers.length; i+=2) {
    bmi = 0;
    bmi = bmiCalc(arrayOfNumbers[i], arrayOfNumbers[i+1]);
    console.log(bmi)
        if (bmi < normal){
            answers.push("under")
            console.log("good")
        }
        else if (bmi < overweight){
            answers.push("normal")
            console.log("ok")
        }
        else if (bmi < obese){
            answers.push("over")
            console.log("bad")
        }
        else {answers.push("obese")}
};

Newanswers = answers.join()
finalAnswers = Newanswers.replace(/,/g,' ')
console.log(finalAnswers);