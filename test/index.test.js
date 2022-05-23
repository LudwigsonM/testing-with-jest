import sut from "../src/index.js"

describe("The Test for sum", () => {

    it("Should add 2 numbers", () =>{
        // Arrange  
        const c = 5 
        const d = 3
        const expected = 8
    
        //Act
        const actual = sut(c, d)
        
        //Assert
        expect(actual).toBe(expected)
    
    })
    it("Should fail with a string input", () => {
        //Arrange
        const a = "str", b = 5, expected = "Bad Input"

        //Act
        const actual = sut(a,b)

        //Assert
        expect(actual).toBe(expected)
    })
})

describe("the test for cube", () => {
    it(should raise )
})