// // let mode="dark";
// // let color;
// // if (mode="dark"){
// //     color="black"
// // }else if(mode="pink"){
// //     color="pink"
// // }else if(mode="yellow"){
// //     color="yellow"
// // }else{
// //     color="white"
// // }
// // console.log("Mode is",color);
// // // if(mode==="dark") console.log(mode)

// // let age=15;
// // (age>=18)?console.log("adult"):console.log("not-adult");
// bhbnk


// let input=prompt("Enter a No.");
// // if (input%5===0){
// //     console.log(input,"is multiple of 5");
// // }else{
// //     console.log(input,"is not multiple of 5");
// // }
// let marks_Obtained=prompt("Enter Your Marks");
// let grades;
// if (marks_Obtained>=80 && marks_Obtained<=100){
//     grades="A"; 
// }else if(marks_Obtained>=70 && marks_Obtained<=89){
//     grades="B";
// }else if(marks_Obtained>=60 && marks_Obtained<=69){
//     grades="C";
// }else if (marks_Obtained>=50 && marks_Obtained<=59){
//     grades= "D"
// }else if(marks_Obtained>=0 && marks_Obtained<=49){
//     grades="F"
// }
// console.log("Grade Obtained =",grades); 


// let marks=[85,97,44,37,76,60];
// //arrays used for   same type of data
// console.log(marks);
// console.log(marks.length);
// let heroes=['ironman','thor','hulk','ironman'];
// console.log(heroes);
// console.log(heroes[0]);
// console.log(marks[0]);
// console.log(heroes[3]);
// console.log(heroes[1]);
// console.log(heroes[0]);
// console.log(heroes[0]);
// console.log(heroes[0]);
// console.log(heroes[0]);
// console.log(heroes[0]);
// console.log(heroes[0]);
// console.log(heroes[0]);
// marks[0]=45;
// console.log(marks);
// for (let idx=0;idx<marks.length;idx++){
//     console.log(marks[idx]);
// }
// for (let i=0;i<heroes.length;i++){
//     console.log(heroes[i]);
// }
// //for of
// for (let hero of heroes){
//     console.log(hero);
// }
// let cities=['Delhi','Pune','Mumbai','Hyderabad','Chennai','Kolkata'];
// for (let city of cities){
//     console.log(city.toUpperCase());
// }
// let marks2=[85,97,44,37,76,60];
// let Sum=0;
// for (let i=0;i<marks2.length;i++){
//     Sum=Sum+marks2[i];
// }
// console.log("Sum of Marks= ",Sum);
// console.log('Average Marks= ',Sum/marks2.length);
// //for of Q 1
// let sum=0;
// for (let val of marks2){
//     sum+=val;
// }
// console.log("Sum Of Marks=",sum)
// console.log("Avg Marks=",sum/marks2.length);
// let Avg=sum/marks2.length;
// console.log(`AVg Marks = ${Avg}`);
// //Q No-2
// let price=[250,645,300,900,50];
// let i=0;
// for(let val of price){
//     price[i]=price[i]-price[i]/10;
//     //console.log(`value after offer=${price[i]}`);
//     console.log(price[i]);
//     i++;
// }
// console.log(price);

// Solving Q no2 by For loop
// let price=[250,645,300,900,50];
// for (let i=0;i<price.length;i++){
//     price[i]=price[i]-price[i]/10;
//     console.log('Price after offer= ',price[i]);

// }
// console.log('Price Array after offer', price);

// let veggies=["potato","brinjal","ladyfinger","tomato"];
// console.log(veggies);
// //push
// console.log(veggies.push("onion"),veggies);
// veggies.push("chips","apple","mango");
// console.log(veggies);
// let k=veggies.pop();
// console.log(veggies);
// console.log('deleted',k);
// console.log(veggies.toString());
// let marvel_heroes=["thor","spiderman","ironman"];
// let dc_heroes=["superman",'batman'];
// let indian_Heroes=['Krish','Shaktiman'];
// let heroes=marvel_heroes.concat(dc_heroes,indian_Heroes);
// console.log(heroes);
// marvel_heroes.shift('antman')
// console.log(marvel_heroes);

// let marvelHeroes=['thor','spiderman','ironman','antman','Dr Strange'];
// console.log(marvelHeroes.slice(1,4));
// console.log(marvelHeroes.splice(2,0,'marvel'));
// console.log(marvelHeroes);
// console.log(marvelHeroes.splice(2,2));
// console.log(marvelHeroes);
// marvelHeroes.splice(2)
// console.log(marvelHeroes)

// //Practice Q1
// let companies=['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
// console.log('Companies : ',companies.toString());
// companies.shift();
// console.log('Companies : ',companies.toString());
// companies.splice(1,1,'Ola');
// console.log('Companies : ',companies.toString());
// companies.push('Amazon');
// console.log('Companies : ',companies.toString());

// Chapter 5 Functions

// function myFunction(msg){
//     console.log("Welcome to Apna College!! ");
//     console.log("learning JS");
//     console.log(msg)
// }
// myFunction("I love Myself");
// myFunction(67);
 
// //function for sum of 2 no.
// function sumOfNo(a,b){
//     console.log('Sum =',a+b);
// }
// sumOfNo(3,476);
// myFunction();

// //sum Function
// function sum(a,b){
//     return(a+b)
// }
// //arrowFunction
// const arrowSum=(a,b)=>{
//     console.log(a+b);
// }
// arrowSum(9,5)
// function mul(a,b){
//     return(a*b)
// }
// //arrowFunction modernJS
// const arrowMul=(a,b)=>{
//     console.log(a*b);
// }
// arrowMul(9,5);

// //practiceQ1
// function noOfVowels(string){
//     //let string=prompt("enter a word : ");
//     let vowels=('a','e','i','o','u');
//     let index=0;
//     let vowelno=0;
//     for (let index of string){
//         for(let indx of vowels){
//             if(vowels[indx]=!string[index])
//              {
//              vowelno++;
//              }
//             }
//         }
//         index++;
//         console.log(vowelno);
//     }
// noOfVowels('apple');

// function countVowels(str){
//     let count=0;
//     for (let i of str){
//         if (i==="a"||i==="e"||i==="i"||i==="o"||i==="u"){
//             count++;
//         }
//     }
//     return(count);
// }
// //arrowFunction for same
// let countingVowels=(str)=>{
//     let count=0;
//     for (let i of str){
//         if (i==="a"||i==="e"||i==="i"||i==="o"||i==="u"){
//             count++;
//         }
//     }
//     return(count);
// }

// let cities=["Pune","Mumbai","Delhi","Patna"];
// cities.forEach((val)=>{
//     console.log(val.toUpperCase());
// },2,cities)
// cities.forEach(function printVal(val){
//     console.log(val);
// })
// cities.forEach((val,id,cities)=>{
//     console.log(val.toUpperCase(),id,cities);
// })

// //practiceQ 2
// noArray=[67,52,39];
// noArray.forEach((no,idx,noArray)=>{
//     console.log(idx,'Square=',no*no,noArray);
// })
// //other method to pass callback
// let calcSquare=(no,idx,noArray)=>{
//     console.log(idx,'Square=',no*no,noArray);
// }
// noArray.forEach(calcSquare);
// let newNoArray=noArray.map((no)=>{
//     console.log(no*no);
//     return (no*no);
// })
// console.log(noArray,newNoArray);

// let num=[1,2,3,4,5,6,7,8,9,10];
// let evenNum=num.filter((val)=>{
//     return(val%2==0);
// })
// console.log(evenNum);
// //reduce Method For Array
//   //findAverage
// let arr=[5,6,2,1,3];
// const output=arr.reduce((prev,curr)=>{
//     return (prev+curr);
// })
// console.log(output/arr.length);
// //findGreatestVal
// let newOutput=arr.reduce((prev,curr)=>{
//     if(prev>=curr){
//         return prev;
//     }
//     else{
//         return curr;
//     }
// })
// console.log(newOutput);
// let newOutput1=arr.reduce((prev,curr)=>{
//     return prev<=curr ? prev:curr;
// })
// console.log(newOutput1);
// //practiceQ3
// studMarks=[87,93,64,99,86];
// let above90=studMarks.filter((val)=>{
//     return val>90 ;
// })
// console.log("Students Scoring 90+ = ",above90)
// //practiceQ4
// let n=[prompt("Enter a No. :")]
// let newArray=[]
// for(let i=1;i<=n;i++){
//     newArray[i-1]=i;
// }
// console.log(newArray);
// practiceQ5
// let sumArray=newArray.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log('Sum = ',sumArray);
// //practicQ6
// let prodArray=newArray.reduce((prev,curr)=>{
//     return prev*curr;
// })
// console.log('factorial =',prodArray);
// let btn=document.querySelectorAll("button");
// console.log(btn);
// console.dir(btn);
// //document.body.style.backgroundColor="green";
// console.dir(document.body.childNodes[3]);
// console.dir(document.getElementsByClassName("signupbar"));
// console.dir(window.document.getElementsByTagName("section"));
// let elements=document.querySelector("a");

// console.dir(elements);
// console.dir(elements.tagName);
// console.dir(elements.innerText);
// console.dir(elements.innerHTML);
// console.dir(document.querySelector("section").innerText);
// console.dir(document.querySelector("section").innerHTML);
// console.dir(document.querySelector("section").textContent);
// console.dir(document.body.children);
// elements.innerText="ABCDE";