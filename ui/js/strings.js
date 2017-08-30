var str1 = "Welcome to javascript"; // or var str1 = 'js';
var str2 = ""; // empty string

var str3 = new String();

document.getElementById('heading').innerText = str1;

console.log("str1 length::", str1.length);

var mycharindex = str1.charAt(9);
console.log('mycharindex::', mycharindex);


function strRevere() {
  var str = document.getElementById('getrStr').value;
  document.getElementById('gstr').innerText = str;
  var reverseStr = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str.charAt(i);
  };
  document.getElementById('rstr').innerText = reverseStr;
};

//palendrom liril = liril
function checkPalendrome() {
  var paledromeStr = document.getElementById('getStr').value;
  var reversepStr = '';
  for (var i = paledromeStr.length - 1; i >= 0; i--) {
    reversepStr = reversepStr + paledromeStr.charAt(i);
  };
  if (paledromeStr == reversepStr) {
    alert('given string Palendrome');
  } else {
    alert('given string is not a palendrome');
  }
}

var str4 = "welcome";

var str5 = 'Welcome' + 'to JS';
console.log(str5);
var str6 = "welcome ";
var str7 = "to Javscript";

var str8 = str6.concat(str7);
console.log('str8::', str8);


var arr1 = [1, 2, 3];
var arr2 = [4, 6, 7];
var arr3 = arr1.concat(arr2);
console.log("arr3::", arr3);


function strRevere1() {
  var str = document.getElementById('getrStr').value;
  document.getElementById('gstr').innerText = str;
  var reverseStr = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
  };
  document.getElementById('rstr').innerText = reverseStr;
};

var arr1 = [1, 2, 6, 7, 1, 6, 6, 7, 2];
var output = [];
for (var i = 0; i < arr1.length - 1; i++) {
  if (output.indexOf(arr1[i]) == -1) {
    output.push(arr1[i]);
  }
  console.log("output", output);
};


// for (var i = 1; i < 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i, 'Eagle Creek');
//   } else {
//     if (i % 3 == 0) {
//       console.log(i, 'Eagle');
//     }
//     if (i % 5 == 0) {
//       console.log(i, 'Creek');
//     }
//   }
//   if (i % 3 != 0) {
//     console.log(i);
//   } else if (i % 5 != 0) {
//     console.log(i);
//   }


  for (i=1; i<=100; i++) { 
 // if the number is divisible by 3, write "Fizz"
  if ( i % 3 === 0 && i % 5 === 0) { 
    console.log("Eagle Creek"); }
  // if the number is divisible by 5, write "Buzz"
  else if ( i % 3 === 0) {
    console.log("Eagle"); }
    // otherwise, write just the number
  else if ( i % 5 === 0) {
      console.log("Creek"); }
  else {
    console.log(i);
  }
}
