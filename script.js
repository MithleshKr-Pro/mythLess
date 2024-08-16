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
//

let marks=[85,97,44,37,76,60];
//arrays used for   same type of data
console.log(marks);
console.log(marks.length);
let heroes=['ironman','thor','hulk','ironman'];
console.log(heroes);
console.log(heroes[0]);
console.log(marks[0]);
console.log(heroes[3]);
console.log(heroes[1]);
console.log(heroes[0]);
console.log(heroes[0]);
console.log(heroes[0]);
console.log(heroes[0]);
console.log(heroes[0]);
console.log(heroes[0]);
console.log(heroes[0]);
marks[0]=45;
console.log(marks);
for (let idx=0;idx<marks.length;idx++){
    console.log(marks[idx]);
}
for (let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}
//for of
for (let hero of heroes){
    console.log(hero);
}
let cities=['Delhi','Pune','Mumbai','Hyderabad','Chennai','Kolkata'];
for (let city of cities){
    console.log(city.toUpperCase());
}
let marks2=[85,97,44,37,76,60];
let Sum=0;
for (let i=0;i<marks2.length;i++){
    Sum=Sum+marks2[i];
}
console.log("Sum of Marks= ",Sum);
console.log('Average Marks= ',Sum/marks2.length);
//for of
let sum=0;
for (let val of marks2){
    sum+=val;
}
console.log("Sum Of Marks=",sum)
console.log("Avg Marks=",sum/marks2.length);
let Avg=sum/marks2.length;
console.log(`AVg Marks = ${Avg}`);
//Q No-2
let price=[250,645,300,900,50];
let price2=[]
for (let i of price){
    i=i-(i*0.1);
    console.log(i);
    //price[i]=i-i*0.1;
    for (let idx of price){
        price[idx]=i;
    }
}
console.log(price);