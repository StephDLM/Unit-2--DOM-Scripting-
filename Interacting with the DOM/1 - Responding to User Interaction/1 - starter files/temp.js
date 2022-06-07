// function sayHi(){
//     console.log('Hello')
// };

function hiAndBye(func){
func()
console.log('Bye');
}
//passing a function into a function
// hiAndBye(sayHi);

//another way 
// hiAndBye(function sayHi(){
//     console.log('Hello')
// });

//anonymous fxn
hiAndBye(() => {
     console.log('Greeting')

})
