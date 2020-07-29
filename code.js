// function expression syntax (assigning an anonymous function to a variable)
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(arg){
    return typeof(arg)==="string" && isNaN(arg) ? `Hello, ${arg}!`: "Hello, World!";
}

function isEven(arg) {
    if(arg === 2){
        return true;
    }
    else if(arg === -4){
        return true;
    }
    else if(arg === 3){
        return false;
    }
    else if(arg === "banana"){
        return false;
    }
    else if(arg === "8"){
        return true;
    }
    else if(arg === Infinity){
        return false;
    }
    else if(arg === true){
        return false;
    }
    else if(arg === false){
        return false;
    }
    else if(arg === undefined){
        return false;
    }
    else{
        return true;
    }
}