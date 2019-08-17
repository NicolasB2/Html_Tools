//edit atribute
style.display = "block" //dont show the atribute
style.display = "none"  //show the atribute
.innerHTML    = "some"  //write in an atribute
	

//print
window.alert("some"); //print in page
console.log(5 + 6);   //print in console


//variables
var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String

var carName1 = "Volvo XC60";   // Using double quotes
var carName2 = 'Volvo XC60';   // Using single quotes


var answer1 = "He is called 'Johnny'";    // Single quotes inside double quotes
var answer2 = 'He is called \'Johnny\'';  // Single quotes inside single quotes
var answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes
var answer4 = "He is called \"Johnny\"";  // Double quotes inside double quotes

var x1 = 34.00;     // Written with decimals
var x2 = 34;        // Written without decimals

var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123


//logical expresions 
var x = 5;
var y = 5;
var z = 6;
(x == y)       // Returns true
(x == z)       // Returns false


//Function
var x = myFunction(4, 3);   // Function is called, return value will end up in x
function myFunction(a, b) {return a * b;} // Function returns the product of a and b


//Objects
var cars = ["Saab", "Volvo", "BMW"]; //Array
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}; //object

person.firstName + " " + person.lastName;          // Display some data from the object:
person["firstName"] + " " + person["lastName"];    // Display some data from the object:



//String methods
var str  = "Please, locate where 'locate' occurs!";

var sln  = str.length;           //String´s length
var x = str.split("separator");  //split the string 

var pos1 = str.indexOf("word");      //first index of the word
var pos2 = str.lastIndexOf("word");  //last index of the word
var pos3 = str.search("word");       //search the first word

var sub1 = str.slice(start);            //split the word since the start
var sub2 = str.slice(start, end);       //split the word since the start to the end
var sub3 = str.substring(start, end);   //split the word since the start to the end
var sub4 = str.substr(start, length);   //split the word since the start with the length specificate

var repl = str.replace("original", "new");  //replece
var cont = text1.concat(" ", text2);        //concat
var trim = str.trim();                      //trim

var text2 = text1.toUpperCase();     //Upper the string
var text2 = text1.toLowerCase();     //Lower the string

var at1 = str[position];           //select he word in position 
var at2 = charAt(position);        //select he word in position 
var at3 = harCodeAt(position);     //select the codo of word in position


//Number Methods
var x = 123;

x.toString();               //returns a number as a string
x.toExponential(number);    //A parameter defines the number of characters behind the decimal point
x.toFixed(number);          //A parameter defines the number of decimals