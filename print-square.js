var size = 5;
var i = 0;

function printSquare() {
  for (var i = 0; i < size; i++){
  for (var j = 0; j < size; j++)
      console.log("*******");
      console.log("\n");
  }
}

console.log(printSquare(5))
//thought that would work...how do i get javascript to make columns?