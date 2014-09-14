var seq = "843 3759 3017 15543 1581 25 1901 19102 2366 45671 572 45586 24 789 3326 175 42716 41".split(/,| /);

var arrayOfNumbers = seq.map(Number);
var count = 0
var results = []


for (var i = 0; i < arrayOfNumbers.length; i++) {
    
    count = 0

    while (arrayOfNumbers[i] > 1){

        if (arrayOfNumbers[i] % 2 === 0) {
            arrayOfNumbers[i] = arrayOfNumbers[i] / 2;
        }

        else {
             arrayOfNumbers[i] = (3 * arrayOfNumbers[i]) + 1;
        }

    count++
    }
    
    results.push(count)

};

results = results.join().replace(/,/g,' ')
output(results)