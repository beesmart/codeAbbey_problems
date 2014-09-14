var seq = "710804 20619 332388 488065 649179 203514 275499 582308 232954 925692 523661 182753 508175 707011 210136 649638 359841 972828 308591 960425 528917 477005".split(/,| /);

var arrayOfNumbers = seq.map(Number);
var total = 0;
var answers = [];



for (var i = 0; i < arrayOfNumbers.length; i+=2) {
    // total += arrayOfNumbers[i];
    console.log(arrayOfNumbers[i])

    for (var z = 0; z < 1; z++) {
         total = arrayOfNumbers[i] + arrayOfNumbers[i+1];
         console.log(total);
         answers.push(total);

     };
};