//Leetspeak
var alphabet = {
"a": '4',
"e": '3',
"g": '6',
"i": '1',
"o": '0',
"s": '5',
"t": '7',
};

function leetSpeak(string) {
  string = string || string.value.toLowerCase(); //giving the string value, taking string
  for (var i = 0; i < string.length; i++) {

    if (alphabet[string[i]]) {//searches string, when alphabet found, replaces letters from alphabet object=>

      string = string.replace(string[i], alphabet[string[i]]);
    }
  }
  return string;
};

console.log(leetSpeak('You cant see me my time is now'))

//oh my gosh this took sooooo long to do!
