var seq = "404 410 407 398 412 407 14 791 85 49 7 9 522 609 1493 10 43 51 102 5 105 1113 995 1037 768 10 11 179 172 184 857 577 573 6 13 88 951 891 984 134 96 21 1525 636 714 904 67 834 8 283 236 999 968 1084 38 48 42 5 69 77 1238 741 513 878 956 76 2 36 87".split(/,| /); var arrayOfNumbers = seq.map(Number);
var answers = [];

function sortNumber(a,b) {
    return a - b;
}

for (var i = 0; i < arrayOfNumbers.length; i+=3) {
    console.log(arrayOfNumbers[i])
    for (var z = 0; z < 1; z++) {
        

        setOfThree = arrayOfNumbers.slice(i, i+3);
        
        setOfThree.sort(sortNumber);
        console.log(setOfThree)
        answers.push(setOfThree[Math.floor((setOfThree.length) / 2)])
        console.log(setOfThree)
    };

};

Newanswers = answers.join()
finalAnswers = Newanswers.replace(/,/g,' ')
console.log(finalAnswers);