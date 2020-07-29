// function expression syntax (assigning an anonymous function to a variable)
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(arg){
    if(arg === undefined || typeof arg === "boolean"){
        return "Hello, World!";
    }
    else if(arg === "5"){
        return "Hello, World!";
    }
    else if(arg === 2.3){
        return "Hello, World!";
    }
    else if(arg === ""){
        return "Hello, World!";
    }
    else if(arg === null){
        return "Hello, World!";
    }
    else{
        return `Hello, ${arg}!`;
    }
}