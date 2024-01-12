
// declaring object using Dot Notation
// let objectD = {}
// objectD.name = "abiola";
// objectD.school = 'altschool';
// objectD.age = '25';


// console.log(objectD)

// function min(a,b){
//     return (a == b) ? a : a+b
// }

// console.log(min(1,2))

// Write a function pow(x,n) that returns x in power n. Or, in 
// other words, multiplies x by itself n times and returns the result.
// // pow(3, 2) = 3 * 3 = 9

// pow(3, 3) = 3 * 3 * 3 = 27

// pow(1, 100) = 1 * 1 * ...* 1 = 1

// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

// Prompt the user for the values of x and n
// let x = parseInt(prompt("Enter the value of x:"));
// let n = parseInt(prompt("Enter the value of n:"));

// // Validate if the inputs are numbers
// if (!(x) || !(n)) {
//   alert("Please enter valid numeric values for x and n.");
// } else {
//   // Function definition
//   function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }

//     return result;
//   }

//   // Call the function and display the result
//   alert(`Result: ${pow(x, n)}`);
// }

// let x = parseInt(prompt('enter the value of x', 0))
// let n = parseInt(prompt('enter the value of n', 0))

// if((!x) || (!n)){
//     alert('enter a numeric value of x and n')
// } else {
//     function pow(x, n){
//         let res = 1;
//         for(let i = 0; i<n; i++){
//             res*=x;
//         }
//         return res;
//     }
//     alert(`your value is ${pow(x,n)}`)
// }

// objects are used to store collection of datas in javascript

// there are 2 ways of creating object in javascript
// let user = new Object()  /*this way of creating objects in not used anymore*/

// second way of creating objects
// let user = {
//     name: 'abiola',
//     course: 'javascript',
//     age: '25',
//     "like dog" : true /*in other to have multiword property, we need to wrap it with semi-colon*/
// }

// console.log(user["like dog"])
// user.admin = true
// console.log(user.admin)

// delect from the object
// delete user.course
// console.log(user)

// function makeUser(name, age){
//     return{
//         name: name, //name,  ---property value shorthand
//         age: age   //age ------property value shorthand
//     }
// }

// let user = makeUser('john', 30)
// console.log(user)

// check if a property exist in an object using the "IN operator"

// let user = {
//     name: "abiola",
//     age: 27
// }

// alert("name" in user) //output will return true

// OBJECT EXAMPLE

let user = {
        name: "abiola",
        age: 27,
        isAdmin: true
    }

    // alert(user.name)
    // alert(user.age)
    // alert(user.isAdmin)

    // another method of alerting object using loop

    // for(key in user){
    //     alert(key) // this alone will output only the variable names in our object
    //     alert(user[key]) // this alone will output only the variable value in our object
    //     //both will output all data in object, both variable name and value
    // }

