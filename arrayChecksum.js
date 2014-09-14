var index = seq.map(Number);
console.log(index)
var seed = 113
var result = 0;
var limit = 10000007;

function checksum (index){
for (var i = 0; i < index.length; i++) {
     result = (result + index[i]) * seed
     if (result > limit){
         result = result % limit
     }
 };



return result
}