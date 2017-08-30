var myObj = {}; // empty object.

  var myObj1 = {
    name: 'Babu'
  };

  console.log("User Name:: ", myObj1.name);
  console.log("User Name1========================:::::::>:: ", myObj1['name']);

  var myObj2 = {sno: 1, name: "Bujji", address: "Hyderabad"};

  console.log('Address::', myObj2.address);
  console.log('Address::', myObj2);
  document.getElementById('sno').innerHTML = myObj2.sno; // 1
  document.getElementById('name').innerHTML = myObj2.name; // bujji
  document.getElementsByClassName('address')[0].innerHTML = myObj2.address; // hyderabad
  
  var myObj3 = {
    sno: 1,
    name: 'Bujji',
    married: false,
    address:  {
      location: 'Hyderabad',
      pin: 532459
    },
    branches: ['hyd', 'US', 'UK']
  };


  console.log(myObj3.address.pin);
  //document.getElementById('pin').innerHTML = myObj3.address.pin;
  document.getElementsByClassName('x')[0].innerHTML = myObj3.address.pin;
  
  console.log(myObj3.branches[1]);
  document.getElementById('us').innerHTML = myObj3.branches[1];

//create object.
  var cObj = {
    sno:'',
    name:'',
    address:''
  }; 
cObj.sno = 1;
cObj.name = "Bujji Babu";
cObj.address = 'Vizag';

console.log('cObj=================>', cObj);


var cObj2 = {}; // 
var cobj2 = new Object(); 

cObj2.address = 'hyd';
cObj2['name'] = 'Vamsi';
cObj2['sno'] = 10;

console.log("cObj====>", cObj2);


