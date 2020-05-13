//problem-1 (use of library functions)

// var firstName = prompt("Enter the First Name: ");
// var lastName = prompt("Enter the Last Name: ")
// var fullName = firstName + " " + lastName;
// document.write("FullName: " + fullName + "<br/>");
// document.write("Total Length of Name: " + fullName.length + "<br/>");
// document.write("Uppercase: " + fullName.toUpperCase()+ "<br/>");
// document.write("2nd position character: " + fullName.slice(1,3) + "<br/>");
// document.write("2nd position character: " + fullName.charAt(1));

//problem-2 (calculator)

// var num1 = (parseInt(prompt("Enter your first number: ")));
// var num2 = (parseInt(prompt("Enter your second number: ")));
// var result = num1 + num2;
// document.write(num1 +  " + " + num2 + " = " + result + "<br/>" );
// var result = num1 - num2;
// document.write(num1 +  " - " + num2 + " = " + result + "<br/>" );
// var result = num1 * num2;
// document.write(num1 +  " * " + num2 + " = " + result + "<br/>" );
// var result = num1 / num2;
// document.write(num1 +  " / " + num2 + " = " + result + "<br/>" );
// var result = num1 % num2;
// document.write(num1 +  " % " + num2 + " = " + result + "<br/>" );

//problem-3 (area of shape)

// var a = (parseInt(prompt("Enter length of side: ")));
// var b = (parseInt(prompt("Enter base: ")));
// var h = (parseInt(prompt("Enter height: ")));
// var trapixeum =(0.5*(a*b))*h;
// document.write("shape of trapezeum: " + trapixeum);

//problem - 4 (Temperature Converter)

// var far = (parseInt(prompt("Enter Fahrenheit: ")));
// var tem = ((far-32) * (5/9));
// document.write(tem.toFixed(3));

//problem-5 (letter grade problem)

// var mark = (parseInt(prompt("Enter Marks: ")));
// if(mark > 100 || mark < 0){
//     document.write("Invalid Grade");
// }else if(mark >=80 && mark <= 100){
//     document.write("A+");
// }else if(mark >=75 && mark < 80){
//     document.write("A");
// }else if(mark >=70 && mark < 75){
//     document.write("A-");
// }else if(mark >=65 && mark <70){
//     document.write("B+");
// }else if(mark >=60 && mark < 65){
//     document.write("B");
// }else if(mark >=55 && mark < 60){
//     document.write("B-");
// }else if(mark >=50 && mark < 55){
//     document.write("C+");
// }else if(mark >=45 && mark < 50){
//     document.write("C");
// }else if(mark >=40 && mark < 45){
//     document.write("D");
// }else{
//     document.write("Fail");
// }

// // problem-6 (Find out maximum number)

//  var num1 = (parseInt(prompt("Enter First Number: ")));
//  var num2 = (parseInt(prompt("Enter Second Number: ")));
//  var num3 = (parseInt(prompt("Enter Third Number: ")));
//   if(num1 > num2 && num1 >num3){
//        document.write("Large Number: " + num1);
//   }else if(num2 > num1 && num2 >num3){
//     document.write("Large Number: " + num2);
//   }else{
//     document.write("Large Number: " + num3);
//   }

// // problem-7 (vowel and consonant)

//  var letter = prompt("Enter letter : ");
//  var letter = letter.toUpperCase();
//   if(letter == "A" || letter =="E" || letter=="I" || letter=="O"|| letter=="U"){
//       document.write("Vowel");
//   }else{
//     document.write("Consonant");
//   }
