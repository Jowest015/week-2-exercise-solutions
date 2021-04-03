var base = 55;
var service = {
  good: .2,
  fair: .15,
  bad: .1,
};

//leave the function anonymous

function tipAmount () {
  return "$" + base * service.good
};

//Kind of tricky...but it worked(wanted to see if I could make an object and use that to store the variables)

console.log(tipAmount(base, service.good))

