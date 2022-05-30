//taking json as input
const data1 = require("./TC2.json");
const data2 = require("./TC.json");

//storing keys of json as array
var keys1 = Object.keys(data1);
var keys2 = Object.keys(data2);

//storing values of json ad array
var val1 = Object.values(data1);
var val2 = Object.values(data2);

//to find the elements in first json that are missing from the second
console.log("Missing Property ", getMissing(keys1, keys2), " from second json");
//to find the elements in second json that are missing from the first
console.log("Missing Property ", getMissing(keys2, keys1), " from first json");

//function to compare 2 arrays and find the missing elements
function getMissing(a, b) {
  var missings = [];
  var matches = false;
  for (var i = 0; i < a.length; i++) {
    matches = false;
    for (var e = 0; e < b.length; e++) {
      if (a[i] === b[e]) matches = true;
    }
    if (!matches) missings.push(a[i]);
  }
  return missings;
}

//dissimilar(keys1, keys2);

//function dissimilar(keys1, keys2) {
    const x = keys1.length; const y = keys2.length;
  for (i = 0; i < x; i++) {
    for (j = 0; j < y; j++) {
      if (
        keys1[i] === keys2[j] &&
        val1[i] != val2[j] &&
        typeof val1[i] != "object"
      ) {
        console.log("Disimilar elements ", val1[i], val2[j], " for ", keys1[i]);
      } else if (
        typeof val1[i] === "object" &&
        typeof val2[j] === "object" &&
        val1[i] != null &&
        val2[j] != null
      ) {
        //console.log(val1[i], " ", val2[j]);
       // console.log(typeof val1[i], " ", typeof val2[j]);
        compareObject(val1[i], val2[j]);
      } else {
        continue;
      }
    }
  }
//}

//function to compare objects
function compareObject(x, y) {
  const l1 = x.length,
    l2 = y.length;
  if (x.length !== y.length) {
    console.log("Dissimilar elements in array ", x, " ", y);
  } else {
    for (i = 0; i < l1; i++) {
      //console.log(x[i],' ,',y[i])
      if (x[i] != y[i]) {
        console.log("Dissimilar elements in array ", x, " ", y);
      }
      break;
    }
  }
}
