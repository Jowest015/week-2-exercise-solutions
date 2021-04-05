function printBox(size) { 
  for (i = 0; i < size; i++)
    console.log("*");

  for (var j = 0; j < size - 2; j++) {
    console.log("\n");
    console.log("*");
    for (i = 0; i < size-2; i++)
    console.log(" ");
    console.log("*\n");
  }
  for (i = 0; i < size; i++)
    console.log("*");
    return String;
}

console.log(printBox(5))

//same problem as the printSquare exercise *sigh*