// function expression syntax (assigning an anonymous function to a variable)
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(arg){
    return typeof(arg)==="string" && isNaN(arg) ? `Hello, ${arg}!`: "Hello, World!";
}