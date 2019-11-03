//TASK array tostring method

// let arr = [15, 45, 55];
// const customToString = a => {
//     let result = "";
//     for (let elm of a) {
//         result += elm;
//         if (elm != a[a.length - 1])
//             result += ","

//     }
//     return result;
// }
// console.log(customToString(arr));


//Stack & Heap -value&reference types

// let n1 = 15;
// let n2 = n1;
// n2 = 16;
// console.log("n1- " + n1)
// console.log("n2- " + n2)

// let arr1 = [15, 25, 35];
// let arr2 = arr1;
// let arr3 = arr2;

// arr2[0] = 100;

// arr1.push(10)
// arr3.pop();

// console.log("arr1- " + arr1.toString())
// console.log("arr2- " + arr2.toString())
// console.log("arr3- " + arr3.toString())

// let n1 = 5;

// function Increment(n) {
//     return n += 10;
// }

// console.log(Increment(n1))
// console.log("n1- " + n1)

// const arr = [15, 25, 35];

// function Increment(a) {
//     a[0] = 10;
//     return a;
// }
// console.log(arr)
// console.log(Increment(arr))

// Callback function

// function Sum(arr, func) {
//     let result = 0;
//     for (let elm of arr) {
//         if (func(elm))
//             result += elm;
//     }
//     return result;
// }

// function isEven(n) {
//     return n % 2 === 0;
// }

// const isElderFifty = n => n > 50;


// console.log(Sum(arr, function(n) { return n % 2 === 0; }))
// console.log(Sum(arr, n => n % 2 === 0))
// console.log(Sum(arr, n => n > 50))

//Array iterations

let arr = [15, 20, 55, 60, 22];

// arr.forEach((elm, i) => {
//     console.log(elm + "-indexsi-" + i)
// })

// let newArr = arr.map((elm, i) => elm + i)

let filterArr = arr.filter(elm => elm > 50);



console.log(filterArr)