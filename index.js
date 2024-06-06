const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// titleCased(): returns an array with title case tutorial names. Note that this function takes no arguments and should use the global tutorials variable as data.


// How can we "iterate" through individual words in a string?
// Can we execute an iteration inside an iteration? How?
// How can we capitalize just the first letter in a word?

function titleCased() {
  const stuff = tutorials.map(titleCased2)
  return stuff;
}


function titleCased2(tutorial) {
  const split = tutorial.split(" "); // split the string into an array of words
  const capitalized = split.map(word => word.charAt(0).toUpperCase() + word.slice(1)); // capitalize each word
  const joined = capitalized.join(" "); // join the words back into a string
  console.log(joined);
  return joined;
}

titleCased() //call original function with callback encapsolated