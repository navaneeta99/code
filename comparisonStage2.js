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

dissimilar(keys1, keys2);

function dissimilar(keys1, keys2) {
  for (i = 0; i < keys1.length; i++) {
    for (j = 0; j < keys2.length; j++) {
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
         //console.log(val1[i], val2[j])
        compareObject(val1[i], val2[j]);
      }
    }
  }
}

//function to compare objects
function compareObject(x, y) {
    //console.log(x, y)
  var l1 = x.length, l2 = y.length;
  //console.log(l1,l2)
  if(l1 != l2){
    var a = Math.min(l1,l2)  ;
    var b = Math.max(l1,l2);
    console.log(x ,' has ',l1,' elements and ',y,' has ',l2,' elements');
  }
  else{
      for (i=0;i<l1;i++){
          if(x[i]!=y[i]){
           console.log("Dissimilar elements in array ",x ,' ',y);
            break;
          }
      }
  }
}