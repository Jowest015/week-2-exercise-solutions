var base = 55;
var service = {
  good: .2,
  fair: .15,
  poor: .1,
};

//leave the function anonymous

function tipAmount () {
  return "$" + base * service.good
}

//Kind of tricky...but it worked
console.log(tipAmount(base, service.good))