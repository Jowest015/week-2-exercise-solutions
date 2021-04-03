var base = 55;
var service = {
  good: .2,
  fair: .15,
  bad: .1,
};

  function totalAmount () {
    return '$' + ((base * service.good) + base)
  };

console.log(totalAmount(base, service.good))

//looks alright