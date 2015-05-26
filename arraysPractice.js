//Once you complete a problem, open up Chrome and check the answer in the console.


var arr = [10,20,30];
//Create a function named 'first' that is given 'arr' as the argument and  returns the first item the given array.

  //Code Here

var first = function(arrParam) {
  return arrParam[0];
};

first(arr);


//Next problem



var arr = [40,50,60];
//Create a function named 'last' that is given 'arr' as the argument and returns the last item the given array.


  //Code Here

var last = function(arrPara) {
  return arr[arrPara.length-1];
};

last(arr)


//Next Problem


var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
//Create a function named 'looper' that is given family as it's only argument, loops through the given array, and alerts every item in the array.

  //Code Here
var looper = function(arrPara1) {
  for (var i = 0; i < arrPara1.length; i++) {
    alert(arrPara1[i]);
  };
};

looper(family);

//Next problem



var letters = ['A', 'B', 'C', 'D', 'E'];
//Write a function called reversedLooper that is given letters as it's only argument and loops through the given array backwards alerting every item in the array starting at the end.

  //Code Here
var reversedLooper = function(arrPara2) {
  for (var i = arrPara2.length - 1; i > 0; i--) {
    alert(arrPara2[i]);
  };
};

reversedLooper(letters);

//Next Problem


var nums = [1,2,3,6,22,98,45,23,22,12];
//Write a function named evenFinder that is given nums as it's only argument and removes all values that aren't even from the given array.

  //Code Here
var evenFinder = function(arrPara3) {
  for (var i = 0; i < arrPara3.length; i++) {
    if (arrPara3[i] % 2 !== 0) {
      arrPara3.splice(i, 1);
      i--;
    }
  };
};

evenFinder(nums)

//Next problem


var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = [];
//Write a function called divider that is given three arguments, nums, evens, and odds.
//Have divider return an Array with the first item in the array being the evens array (all the even values from nums) and the second item in the Array being the odds array(all the odd values from nums).


  //Code Here

var divider = function(numsPara, evensPara, oddsPara) {
  for (var i = 0; i < numsPara.length; i++) {
    if (numsPara[i] % 2 === 0) {
      evensPara.push(numsPara[i]);
    }
    else {
      oddsPara.push(numsPara[i]);
    }
  };
};

divider(nums, evens, odds)

//Next Problem


var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//Above you're given a function that will return a random number between 0 and 30, and an array full or numbers. Your job is to write a function named finder that will get a random number, then loop through the array to see if that random number is in the array. If it is, return true, if it's not, return false

  //Code Here

var finder = function(arrPara4) {
  var random = getRandomArbitrary();
  for (var i = 0; i < arrPara4.length; i++) {
    if (random === arrPara4[i]) {
      return true;
    }
    else {
      return false;
    }
  };
};

finder(numbers)

//Next problem



var str = 'this is my sentence';
//Write a function called reverse that takes is given str as it's only argument and returns that string after it's been reversed

  //Code Here
var reverse = function(strPara) {
  var newArr = strPara.split('');
  var reverseArr = newArr.reverse('');
  var newStr = reverseArr.join('');
  return newStr;
};

reverse(str)

var reverse = function(strPara) {
  var newArr = strPara.split(' ');
  var reverseArr = newArr.reverse(' ');
  var newStr = reverseArr.join(' ');
  return newStr;
};

reverse(str)

//Next Problem


var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list,
  and adding new items to our list. 
  
  Write a function called removeItem that is given two arguments, the first is myGroceryList, and the
  second is an item to remove from myGroceryList. If the second argument (or the item to add or remove) matches an item in myGroceryList,
  remove that item from the your grocery list and return the new, updated grocery list. 
  
  Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList
  and the second is an item to add to your grocery list. In addItem add the item you passed in to
  myGroceryList then return the new, updated grocery list.
*/

  //Code Here

var removeItem = function(paraGL, paraRemoveItemGL) {
  for (var i = 0; i < paraGL.length; i++) {
    if (paraGL[i] === paraRemoveItemGL) {
      paraGL.splice(paraGL[i], 1);
      i--;
      return paraGL;
    }
  };
};

removeItem(myGroceryList, 'chips')

var addItem = function(paraGL, paraAddItemGL) {
  paraGL.push(paraAddItemGL);
  return paraGL;
};

addItem(myGroceryList, 'jerky')

//removeItem('chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
//addItem('Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];



//Next Problem



//Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.

  //Code Here
var maker = function() {
  var array215 = [];
  for (var i = 1; i < 216; i++) {
    array215.push(i);
  };
  return array215;
};

//Next Problem


var numbers = [5, '9', 16, 19, '25', '34', 48];
//Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]

  //Code Here

var addTen = function(numbersPara) {
  for (var i = 0; i < numbersPara.length; i++) {
    numbersPara[i] = numbersPara[i] + 10;
  };
  return numbersPara;
};

addTen(numbers)

//Next Problem



var num1 = Math.floor(Math.random() * (30 - 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
//Above is some code that adds a random number to both arr1 and arr2.
//Write a function that is given arr1 and arr2 is it's only arguments. Return the array which is longest.

  //Code Here
var longestArray = function(paraArr1, paraArr2) {
  if (paraArr1.length === paraArr2.length) {
    return console.log("Arrays are the same length.")
  }
  else if (paraArr1.length > paraArr2.length) {
    return console.log('Arr1 : [' + paraArr1 + ']');
  }
  else {
    return console.log('Arr2 : [' + paraArr2 + ']');
  }
};

longestArray(arr1, arr2)

/*As a continuation of the previous problem, write another function called 'both'.
  Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example)
  'both' should return a new array full of numbers that are found in both arr1 and arr2.
*/

  //Code Here

var both = function(paraArr1, paraArr2) {
  var bothArr = paraArr1;
  for (var i = 0; i < paraArr2.length; i++) {
    bothArr.push(i);
  }
  return bothArr;
};

both(arr1, arr2)

//NEXT PROBLEM




var devMountainEmployees = [];

var tyler = {
    name: 'Tyler',
    position: 'Lead Instructor/Engineer',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
}

/*Above you're given an empty array with four objects. Fill the devMountainEmployees
array with those four objects. After that console.log the length of the Array and make
sure that it's equal to 4. */

  //Code Here

// devMountainEmployees.push(tyler);
// devMountainEmployees.push(cahlan);
// devMountainEmployees.push(ryan);
// devMountainEmployees.push(colt);

devMountainEmployees.push(tyler, cahlan, ryan, colt);

console.log(devMountainEmployees);



/*Now let's say Cahlan has a mental breakdown and has to take a leave of absense to 'find himself'.
Loop through your devMountainEmployees until you find cahlan, then remove him from the array.*/

  //Code Here

var removeEmployee = function(paraArr, paraPerson) {
  for (var i = 0; i < paraArr.length; i++) {
    if (paraArr[i].name === paraPerson) {
      paraArr.splice(paraArr[i], 1);
      i--;
    }
  };
};

removeEmployee(devMountainEmployees, 'Cahlan')

//NEXT PROBLEM




/*Now we're going to combine what we've learned today (objects) with what we learned
yesterday (arrays). Yeah, take a deep breathe. You're ready for this, promise.
Let's think back to our itunes example (tylermcginnis.com/itunes).
Notice that when you type in an artist name, iTunes gives us back a LOT of data.
What they're really giving us is an Array full of Objects. It probably looks something
like this. */

var data = [
    {
        artist: 'shakira',
        album: 'hips don\'t lie',
        tracks: 16,
    },
    {
        artist: 'shakira',
        album: 'mariposa',
        tracks: 12,
    },
    {
        artist: 'shakira',
        album: 'greatest hits',
        tracks: 19
    }
];



/*A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects)
of Data is to have an Array full of objects. */

//Create an empty array called users.

  //Code Here

var users = [];

/*Now add three user objects to your users array. Each user object should contain the
following properties. name, email, password, username.*/

//include this as one of the objects in your array.
var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniateLoop'
}

//Your Code Here

/*var makeUser = function(para, para2, para3, para4) {
  return {
    name: para,
    email: para2,
    password: para3,
    username: para4
  };
};

var user4 = makeUser('Tyler McGinnis', 'tylermcginnis33@gmail.com', 'iLoveJavaScript', 'infiniateLoop');*/

var user2 = {
  name: 'Brandt Bird',
  email: 'brandtbird@yahoo.com',
  password: 'icdeadPeople',
  username: 'theyarehere'
};

var user3 = {
  name: 'Wendy',
  email: 'mamabird1924@yahoo.com',
  password: 'wuvTruWuv',
  username: 'asYouWish'
};

users.push(user1, user2, user3);


/*Now you have a very common data structure. Twitter is a good use case.
It's easy to imagine that your followers list on Twitter is an Array full or objects
and those objects contain properties about the specific person you follow.*/

/*Now let's say that Tyler decided to delete his account. Loop through your array of
objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
Once you find the particular indice he's located in, delete him from the array.*/

  //Code Here
var deleteUser = function(paraArr, paraEmail) {
  for (var i = 0; i < users.length; i++) {
    if (paraArr[i].email === paraEmail) {
      paraArr.splice(paraArr[i], 1);
    }
  };
};

deleteUser(users, 'tylermcginnis33@gmail.com')


//The activity we just did is very much how data works in 'the real world'.

