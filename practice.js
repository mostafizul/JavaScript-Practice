/*
//use of console
console.log("siam");
console.log(123);
console.log(true);
var siam = "siam is good";
console.log(siam);
console.error("this is error");
console.warn("this is warning");
console.clear();
console.table({a:1,b:2});
*/

/*
variables -> var, let, const
var can't start with number,doesn't allow space or doesn't allow JS key word
var siam = "he is a good boy";
console.log(siam);
let siam1 = "he is a good boy";
console.log(siam);
//have to assign a value
const siam3 = "siam";
console.log(siam3);
*/

/*
//number methods
var num = "23";
var num1 = 2.345
console.log(typeof(num)); //variable type
console.log(parseFloat(num)); //change string to int
console.log(Number(num)); //change string to int
console.log(num1.toFixed(2))// show number after dot
console.log(num1.toPrecision(2))// show number  from start
*/

//library function

// var text = "bangladesh";
// var text1 = "is a beautiful country";
// console.log(text.length);//show total numbers of charracters    
// console.log(text.charAt(3));  //show charracter 3 number index
// console.log(text.toUpperCase()) //show uppercase of charracters    
// console.log(text.concat(text1)); // concat to string
// console.log(text.slice(0,2)); // cut charaters from 0 to 2 (0-2=2)

// //do-while loop
// var i =5;
// do{
//    document.write(i);
//    i++;
// }while(i<10);

// // while loop
// var i =5;
// while(i<10){
//     document.write(i);
//      i++;
// }   

// array and buitin functions
var names = new Array (); //arrat declaration
names[0] = "siam";  // array always start from index 0
names[1] = "siam1";
names[2] = "siam2";
console.log(names);
names.push("siam4"); // add elements last in array
console.log(names);
names.pop("siam3"); // delete elements last in array
console.log(names);
names.shift() //opposite of pop (remove element from first)
console.log(names);
names.unshift("siam6") //opposite of push (add element from first)
console.log(names);
names.splice(1,0,"kabita", "kutub"); //add elements from index 1. 0 means no elements remove
console.log(names);
names.sort(); //sorting array
console.log(names); 
names.reverse(); //reverse array
console.log(names); 







