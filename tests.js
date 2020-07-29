// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit test for the sayHello function
describe('sayHello',function(){
    it('should be a defined function', function(){
        expect(typeof sayHello).toBe('function');
    });
    it('should be a string when called', function(){
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed', function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when no argument is passed and executed', function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when true is passed and executed', function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when false is passed and executed', function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when null is passed and executed', function(){
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when string integer is passed and executed', function(){
        expect(sayHello("5")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when float is passed and executed', function(){
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when "" is passed and executed', function(){
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when array is passed and executed', function(){
        expect(sayHello([])).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when object is passed and executed', function(){
        expect(sayHello({})).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when function is passed and executed', function(){
        expect(sayHello(helloWorld)).toBe("Hello, World!");
    });

});

// Unit test for the isEven function
describe('isEven',function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should be a boolean when called', function(){
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when isEven(2) executed', function(){
        expect(isEven(2)).toBe(true);
    });
    it('should return true when isEven(-4) executed', function(){
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when isEven(3) executed', function(){
        expect(isEven(3)).toBe(false);
    });
    it('should return false when isEven("banana") executed', function(){
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when isEven("8") executed', function(){
        expect(isEven("8")).toBe(true);
    });
    it('should return false when isEven(Infinity) executed', function(){
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when isEven(true) executed', function(){
        expect(isEven(true)).toBe(false);
    });
    it('should return false when isEven(false) executed', function(){
        expect(isEven(false)).toBe(false);
    });
    it('should return false when executed without argument', function(){
        expect(isEven()).toBe(false);
    });
});

// Unit test for the isVowel function
describe('isVowel',function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should be a boolean when called', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when isVowel("A") executed', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when isVowel("y") executed', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when isVowel(4) executed', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when isVowel(true) executed', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when isVowel(false) executed', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when isVowel("banana") executed', function () {
        expect(isVowel("banana")).toBe(false);
    });
});