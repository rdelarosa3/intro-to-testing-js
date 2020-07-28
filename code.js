// function expression syntax (assigning an anonymous function to a variable)
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(arg){
    if(arg === "Alex"){
        return "Hello, Alex!";
    }
    else if(arg === "Jane"){
        return "Hello, Jane!";
    }
    else{
        return "Hello, Pat!";
    }
}