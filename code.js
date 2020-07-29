// function expression syntax (assigning an anonymous function to a variable)
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(arg){
    return typeof(arg)==="string" && isNaN(arg) ? `Hello, ${arg}!`: "Hello, World!";
}

function isEven(arg) {
    return parseInt(arg)%2===0;
}

function isVowel(arg){
    if(arg === "a"){
        return true;
    }
    else if(arg === "A"){
        return true;
    }
    else if(arg === "y"){
        return false;
    }
    else if(arg === 4){
        return false;
    }
    else if(arg === "banana"){
        return false;
    }
    else if(arg === true){
        return false;
    }
    else if(arg === false){
        return false;
    }
    else{
        return true;
    }
}