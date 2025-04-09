//operators

const { validateHeaderValue } = require("http")

//1.arithmetic -> +,-,*,/-quotient,%-remainder
console.log(4%2)
let num=15
if(num%2){
    console.log("Even number")
}
else{
    console.log("Odd number")
}

//logical operators-&&,||,++,--
let a=10
console.log(a++)//post increment
console.log(a)
let b=20
console.log(++b)//pre increment
let c=30
console.log(c--)
console.log(c)
let d=40
console.log(--d)

//comparison operator-==,<,>,<=,>= 
//strict equality === check datatype and value
// non strict equality == returns boolean checks the equality of the value only
//30==40 --> Value
//30===40--> number(datatype) and Value

let x=10
let y='10'  //coerection->implicitly converts the values
console.log(x==y)//true
console.log(x===y)//false
console.log(1==true)


//number===string && 10==='10'
console.log("harish"==="Harish")

console.log(10!=20)

function getBrowser(){
    if(browserName=="chrome"){
        console.log("Launch Browser")
    }
    else if(browserName=="firefox"){
        console.log("Launch Firefox")
    }
    else{
        console.log("unsupported browser")
    }
}
let browserName="firefox"
getBrowser()

//switch case
function getBrowserName(){
    switch(browser){
        case 'chrome':
            console.log("Launch chrome")
            break;//stops the execution
        case 'firefox':
            console.log('Launch Firefox')
            break;//stops the execution
        case 'edge':
            console.log('Launch Edge')
            break;//stops the execution
            default:
                console.log("unsupported browser")
                break;//stops the execution
    }
}
let browser="chrome"
getBrowserName()