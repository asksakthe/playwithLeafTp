console.log("Learning JAvascript");
//node -v -->version check of node
//to run the code - node filename.js
//keywords-var,let,const

//1.var->variable-name->username->value as sasi
var username="sasi" //string data-->set of character data-->declaration and assignment
username="sakti"   //reassigning the value to the variable
console.log(username)

var username;//redeclaration
username="sakti" //assigning the value to a variable
username="sasi"  //reassignment

var username="Rishi" //redeclaration and reassignment
var password=123 //number
var phno=9876543210
console.log(typeof username)//string
console.log(typeof password)//number
console.log(typeof phno)//number

var empDetails;
console.log(empDetails) //undefined

var userId=" "
console.log(typeof userId) //string

var userCredentials=null
console.log(typeof userCredentials) //object

var height=12.3
console.log(typeof height)

var weight="12.3injkj"
console.log(typeof weight)

var empName="sasi"
var name=`sasisakthi`
console.log(name)

//concat-append two strings
console.log("The Employee name is :"+empName)

var fname="sasi"
var lname="kala"
console.log(fname+" "+lname)
console.log(`${fname}`+" "+`${lname}`)

var num=123
var num1=345
console.log(num+num1)

//baccktick-to append the number/string
console.log(`The numbers to print are ${num} and ${num1} `)

//boolean -->yes/no
//check the status of the response

var isRaining=true
console.log(typeof isRaining)//boolean

var cha=`a`
console.log(typeof cha)//string(backtick,single quotes)
//Primitive --> string,number,boolean,undefined,null-not recommend
//nonprimitive-->Array,string