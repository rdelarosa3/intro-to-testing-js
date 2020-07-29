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
