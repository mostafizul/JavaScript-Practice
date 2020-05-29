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

// // array and buitin functions
// var names = new Array (); //arrat declaration
// names[0] = "siam";  // array always start from index 0
// names[1] = "siam1";
// names[2] = "siam2";
// console.log(names);
// names.push("siam4"); // add elements last in array
// console.log(names);
// names.pop("siam3"); // delete elements last in array
// console.log(names);
// names.shift() //opposite of pop (remove element from first)
// console.log(names);
// names.unshift("siam6") //opposite of push (add element from first)
// console.log(names);
// names.splice(1,0,"kabita", "kutub"); //add elements from index 1. 0 means no elements remove
// console.log(names);
// names.sort(); //sorting array
// console.log(names); 
// names.reverse(); //reverse array
// console.log(names); 

//object & constructor
  
// function Student(name,age,sex){  //createing constructor
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
    
//     this.display = function(){   // create function in constructor
//         console.log( this.name);
//         console.log( this.age);
//         console.log( this.sex);
//     }
// }
//     var student1 = new Student("siam",26,"male"); //creating object & call constructor
//     var student2 = new Student("Anisa",25,"Female"); //creating object & call constructor
// student1.display();

// console.log(Math.floor(Math.random()*11 +10 )); //random number generate from 10 to 20


//DOM 
// document.getElementById("heading").innerHTML = "Good by </br> Good by";
// document.getElementsByTagName("h2")[0].innerHTML = "is a boy";
// document.getElementsByClassName("heading2")[0].innerHTML = "is a bad boy"
// document.querySelector("a").innerHTML = "Service";
// document.querySelector("ul li a").innerHTML = "Service";
// document.querySelector(".class a").innerHTML = "Service";
// document.querySelectorAll("p")[0].innerHTML = "this is about"

// function para(){
//     document.querySelector("#para").innerHTML = "This is a Paragraph";
// }
//  function firstimg(){
//     document.querySelector("#image-1").src = "img/trainer-3.jpg"
//  }
//  function secondimg(){
//     document.querySelector("#image-1").src = "img/trainer-4.jpg"
// }

// //image slider
// var photos = ["img/trainer-3.jpg","img/trainer-4.jpg"];
// var myphoto = document.querySelector("img");
// var count = 0;
// function prev(){
//     count--;
//     if(count <0){
//         count = photos.length-1;
//         myphoto.src=photos[count];
//     }else{
//         myphoto.src=photos[count];
//     }
// }
// function next(){
//     count++;
//     if(count >=photos.length){
//         count = 0;
//         myphoto.src=photos[count];
//     }else{
//         myphoto.src=photos[count];
//     }
// }

// //changing style
// var change_style = document.querySelector("#para");
// function add(){
//     change_style.classList.add("para-style");
// }
// function remove(){
//     change_style.classList.remove("para-style");
// }

// //addEventListener
// var change_style = document.querySelector("h1");

// change_style.addEventListener("mouseover",function(){
//     change_style.classList.add("para-style");
// });
// change_style.addEventListener("mouseout",function(){
//     change_style.classList.remove("para-style");
// });

// //Multiple addEventListener
// for(var i =0; i<3;i++) {
// document.querySelectorAll(".btn")[i].addEventListener("click", function(){
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " is clicked";
// });
// }