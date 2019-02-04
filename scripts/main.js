var myHeading = document.querySelector('h1');
myHeading.textContent = 'The First Team Squad!';


  

/* function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}
Where is the result output to?
*/


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Manchester-United_old-logo.png') {
      myImage.setAttribute ('src','images/ronaldo.png');
    } else {
      myImage.setAttribute ('src','images/Manchester-United_old-logo.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Jonathon White');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'United are the Bomb ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'United are the Bomb ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}




/*
var myVariable = 'Joe';
myVariable = 'Jonathon'
*/

// This is a one line comment