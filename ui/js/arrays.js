/*var obj1 = {
	sno:1,
	name: 'vamsi',
	address: 'us'
};

var obj2 = {
	sno:2,
	name: 'vamsi1',
	address: 'uk'
};

document.getElementsByClassName('sno')[0].innerHTML = obj1.sno;
document.getElementsByClassName('sno1')[0].innerHTML = obj2.sno; */

//document.getElementById('heading').innerHTML = '<u>Welcome to Javascript Arrays</u>';
document.getElementById('heading').innerText = '<u>Welcome to Javascript Arrays</u>';
var obj = {}; // empty object
var myArray = []; // empty array
var obj1 = new Object(); // another notation for empty obj;
var myArray1 = new Array(); // another notation for empty array;

var myArray2 = [1, 3, 4, 7];
var myArray3 = ['bujji', 'babu'];
var myArray4 = [1, 'bujji', false]; //

console.log("second index value::", myArray2[2]);
console.log(myArray3[1]);

var myArray5 = [{
  sno: 1,
  name: 'vamsi',
  address: {
    location: 'hyd',
    pin: 532459,
    areas: ['vizag', 'sklm', 'kondapur']
  }
}, {
  sno: 2,
  name: 'vamsi1',
  address: {
    location: 'hyd',
    pin: 532459,
    areas: [{ areaname: 'kondapur1' }, { areaname: 'vizag1' }, { areaname: 'sklm1' }]
  }
}];

console.log('printing vizag1::', myArray5[1].address.areas[1].areaname);
console.log('printing kondapur::', myArray5[0].address.areas[2]);
console.log('printing uk with using .', myArray5[1].address); //UK
console.log('printing uk with using array notation', myArray5[1]['address']); //UK

// 1-10 numbers.
for (var i = 1; i < 11; i++) {
	console.log(i);
};

var myNumbers = [2,3,5];
//console.log(myNumbers);
for (var i = 0; i < myNumbers.length; i++) {
	console.log("number of elemts and value ::", myNumbers[i]);
};

var obj = {
	name: bujji
}