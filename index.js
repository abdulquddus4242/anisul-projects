// letter grade

// var marks = prompt("Enter your marks : ");

//    if(marks> 100 || marks <0)
//       console.log("Invalid marks");

//    else if(marks>=80 && marks<=100)
//       console.log("A+");

//    else if(marks>=70 && marks<=79)
//       console.log("A"); 
   
//    else if(marks>=60 && marks<=69)
//       console.log("A-");

//    else if(marks>=50 && marks<=59)
//       console.log("B");

//    else if(marks>=40 && marks<=49)
//       console.log("C");

//    else if(marks>=33 && marks<=39)
//        console.log("D");
//    else
//        console.log("Fail");

// nurmer value
// var num1 = prompt("Enter num1 : ");
// var num2 = prompt("Enter num2 : ");
// var num3 = prompt("Enter num3 : ");

// if(num1>num2 && num1>num3)
//   console.log("Large number = " +num1);

//   if(num2>num1 && num2>num3)
//   console.log("Large number = " +num2);

//   else
//   console.log("Large number = " +num3);

 // vowel/consonant

// var letter = prompt("Enter a letter : ")
// letter =letter.toLocaleLowerCase();

// if(letter == "a" || letter == "e" || letter == "i" ||letter == "o" || letter == "u") 
//    console.log("vowel");
//    else
//    console.log("consonat");

// digit Spelling 
// o-zero, 1-one-------- 9-nine ,10 -not a valid digit

// switch, case, break, default

// var digit = prompt("Enter any digit : ");

// switch(digit){
//     case "0" :
//        console.log("zero");
//        break;

//        case "1" :
//        console.log("one");
//        break;

//        case "2" :
//        console.log("two");
//        break;


//        case "3" :
//        console.log("three");
//        break;

//        case "4" :
//        console.log("four");
//        break;

//        case "5" :
//        console.log("five");
//        break;

//        case "6" :
//        console.log("six");
//        break;

//        case "7" :
//        console.log("seven");
//        break;

//        case "8" :
//        console.log("eight");
//        break;

//        case "9" :
//        console.log("nine");
//        break;

//        default:
//           console.log("not valid digit");

// }


// if(digit==0)
//   console.log("zero");

//   else if(digit==1)
//   console.log("one");

//   else if(digit==2)
//   console.log("two");

//   else if(digit==3)
//   console.log("three");

//   else if(digit==4)
//   console.log("four");

//   else if(digit==5)
//   console.log("five");

//   else if(digit==6)
//   console.log("six");

//   else if(digit==7)
//   console.log("seven");

//   else if(digit==8)
//   console.log("eight");

//   else if(digit==9)
//   console.log("nine");

//   else
//      console.log("Not a valid digit");



// var letter = prompt("Enter a letter : ")

// letter = letter.toLocaleLowerCase();

// switch(letter){
//    case"a":
//       console.log("vowel");
//       break;

//    case"e":
//       console.log("vowel");
//       break;

//    case"i":
//       console.log("vowel");
//       break;

//    case"o":
//       console.log("vowel");
//       break;

//    case"u":
//       console.log("vowel");
//       break;

//       default:
//          console.log("consonant");


// }
// ***************************************
// var letter = prompt("Enter a letter : ")

// letter = letter.toLocaleLowerCase();

// switch(letter){
//    case"a":
//    case"e":
//    case"i":
//    case"o":
//    case"u":
//       console.log("vowel");
//       break;

//       default:
//          console.log("consonant");
// }

// for loop , while loop, do loop;

// for(starning; condition; update){
   
// }

// for(var i= 2; i<=100; i=i+2){
//        document.write(" " +i);
// }
// document.write("End");
// *********************************
// 1+2+3+4+5 =15  creat by loop

// var sum = 0;
// for(var i = 1; i<= 10; i = i+1 ){
//    sum = sum+i;
// }
// document.write(sum);


// var m =parseInt( prompt("Enter the starting Number : ") );
// var n =parseInt( prompt("Enter the last  Number : ") );
// var sum = 0;
// for(var i = m; i<= n; i = i+1){
//        sum = sum+i;
// }
// document.write(sum);


// for(var i= 1; i<=5; i++){
//        var num1 = parseInt(prompt("Enter your First number"));

//        var num2 = parseInt(prompt("Enter your Second number"));
       
//        var sum = num1 + num2;
//        console.log("Result =  "+ sum);


// task: some of all the numbers that are divisible by 3 and 5 from 1-100

// video no- 20; abar dekte hobe.

// var i = 1;
//   var sum = 0;

// while( i<=50 ){
//        if( i % 3 == 0 && i % 5 == 0) {
//               console.log(" " +i);
//               sum = sum + 1 ;
             
             
//        }
//        i = i+1;
// }
//  console.log(" "+ sum );


// for(var i = 1;  i<=100; i++){
//        if(i % 3 == 0 ){
//               continue;
//          }
//        document.write("  " +i);
       
// }
// document.write("End");


// creatin a function

// var num = 5;
// var result = num * num;
// document.write("Result = " + result +"<br>");

// var num = 6;
// var result = num * num;
// document.write("Result = " + result +"<br>");

// var num = 7;
// var result = num * num;
// document.write("Result = " + result +"<br>");


// function sqaure ( num1, num2 ){
       
//        var result = num1 * num2;
//       return result;
// }
// // calling a function
// var x = sqaure(5,6);
// // document.write( sqaure( 5, 6 ) );
// document.write(x);


// student details


// function Student(name, age, cgpa, lang ){
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang =lang;

//     this.display = function(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.cgpa);
//         console.log(this.lang);
        
//     }
// }

// var student1 = new Student("Abdul Quddus", 36, 2.50, ["Bangla", "Hindi", "English"]);

// var student2 = new Student("Sadikul Amin", 16, 3.50, ["Bangla", "Hindi", "English"]);

// var student3 = new Student("Dilroba Akter", 22, 2.60, ["Bangla", "portugis", "English"]);


// student1.display();
// student2.display();
// student3.display();


// var num1 = parseInt(prompt("Enter your First Number"));
// var num2 = parseInt(prompt("Enter your Second Number"));


// var maximum = Math.max(num1,num2);
// console.log(maximum);


// Guessing Game
// Guess a number from 1 to 5
// Generate a ramdom number between 1 to 5
// If the guess number matches random number, than show messge won else lost 
// Run the game for 5 Times 
// show the number of wons and losts


// var numberofwon = 0;
// var numberofloss = 0;

// for(var i = 1; i<=5; i++){
//     var guessNumber =parseInt (prompt("Enter a number from 1 to 5 : "));

//     var ramdomNumber =Math.floor (Math.random()*5) + 1;

//     if(guessNumber==ramdomNumber){
//         console.log("You have won");
//         numberofwon++;
    
//     }else{
//         console.log("You have loss Ramdom Number was  " + ramdomNumber);
//         numberofloss++;
//     }
// }
// document.write("Total Number of won  " + numberofwon + "<br>");

// document.write("Total Number of loss  " + numberofloss + "<br>");