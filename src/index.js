// change the function to return the sum if a > b, or the difference otherwise

const sum = (a,b) => {
    
    if(typeof(a) !=='number' || typeof(b) !=='number'){
        return "Bad Input"
    }
    if(a < b){
        return b - a 
    }
    return a + b;
}

// Write a function that raise a number to the third power 

function cube(num){
    return num ** 3
}


export default sum