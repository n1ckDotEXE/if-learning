/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

function isItLong(val1) {
  if (val1.length > 20) {
    return "That's a long string!";
  }
}

function isItMedium(val1) {
  if (val1.length <= 20 && val1.length >= 10) {
    return "That's a regular sized string!";
  }
}

function isItShort(val1) {
  if (val1.length < 10) {
    return "That's a small string!";
  } else {
    return "That's not a small string!";
  }
}

function howLongIsMyString(val1) {
  if (val1.length > 20) {
    return "That's a long string!";
  } else if (val1.length <= 20 && val1.length >= 10) {
    return "That's a regular sized string!";
  } else { (val1.length < 10)
    return "That's a small string!";
  }
}

function instructorHeight(val1) {
  if (val1 === "Colin") {
    return 62;
  } else if (val1 === "Mesuara") {
    return 69;
  } else { 
    return "I don't know that instructor!";
  }
}

/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}