//yikes
var vowels = {
  "a": "aaaaa",
  "e": "eeeee",
  "i": "iiiii",
  "o": "ooooo",
  "u": "uuuuu",
};


function longVowels(string) {
  string = string || string.value.toLowerCase();

  for (var i = 0; i < string.length; i++) {

    if (vowels[string[i]]) {

      string = string.replace(string[i], vowels[string[i]]);
    }
  }
  return string;
};

console.log(longVowels('hello there'))

//hmm not working...might be string.length value in for statement...what do?