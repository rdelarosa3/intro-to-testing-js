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
    let vowel;
    typeof(arg) === "string" ? vowel = arg.toLowerCase(): false;
    switch(vowel) {
        case "a":
            return true;
        case "e":
            return true;
        case "i":
            return true;
        case "o":
            return true;
        case "u":
            return true;
        default:
            return false;
    }
}

function add(arg,arg1){
    return parseInt(arg)+ parseInt(arg1);
}