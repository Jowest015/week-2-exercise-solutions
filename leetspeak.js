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
  string = string || string.value.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (alphabet[string[i]]) {
      string = string.replace(string[i], alphabet[string[i]]);
    }
  }
  return string;
};

console.log(leetSpeak('leetcrazy'))

//oh my gosh this took sooooo long to do!
