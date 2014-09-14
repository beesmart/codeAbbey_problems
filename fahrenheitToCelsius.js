var seq = "411 452 491 211 485 65 162 250 559 63 75 244 487 472 92 321 599 551 65 249 526 127 420 297 95 231 91 571 390 71 88".split(/,| /);
var arrayOfNumbers = seq.map(Number);
var total = 0;
var answers = [];

// function convert(){
    for (var i = 0; i < arrayOfNumbers.length; i+=1) {
        
        check = (arrayOfNumbers[i] - 32) / 1.8;
            if (check - Math.floor(check) == 0.5){
                total = Math.ceil((arrayOfNumbers[i] - 32) / 1.8);
                answers.push(total)
                console.log(total)
   }
             else {total = Math.round((arrayOfNumbers[i] - 32) / 1.8);
                 answers.push(total)}

  };
// };

newAnswers = answers.join();
finalAnswers = newAnswers.replace(/,/g,' ')
console.log(finalAnswers);