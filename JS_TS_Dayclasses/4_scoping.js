//scoping-->level of accessibility
//global scoping
//function scoping 
//block scoping

//var-global/function variable scoping
//let-block level scoping variable

//{  // block } 


var gender="female"//global variable
function printGender(){
    let age=30 //function variable 
    if(gender.startsWith('f')){
        let color="pink"
        console.log("She/Her")
        console.log(age)
        console.log(color)
    }
    else{
        console.log("He/Him")
    }
    console.log(age) 
    //console.log(color)//throw  as not defined
}
printGender()
// console.log(age)-age is not defined