
var a = 'maja'

var myFunction = function(){
    var b = 'hello'

    // console.log(b) // accessible
    // console.log(a) // accessible
    // console.log(c) // accessible
    // console.log(d) // not accessible from another script
    // console.log(e) // accessible
    //console.log(f) // not accessible from file after
  
}

var c = 'boo' 

// console.log(b) // not accessible from function
// console.log(a) // accessible
// console.log(c) // accessible
// console.log(d) // not accessible from another script
// console.log(e) // accessible
console.log(f) // not accessible from file after

myFunction()
