// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const Fibonacci = () => {
    let newArray= [0,1]
    let a = 0
    let b = 1
    for (let i=0; i<9; i++){
        added = a + b
        newArray.push(added)
        a=b
        b=added 
    }
    return newArray
}
console.log(Fibonacci())

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const onlyOdd = (array) => {
    let onlyNum = array.filter(value => typeof value === "number" && value % 2 === 1 || value % 2 === -1 )
    return onlyNum.sort(function(a, b){return a-b})
}

console.log(onlyOdd(fullArr1))
console.log(onlyOdd(fullArr2))
// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const middleLetter = (string) => {
    let newArray= string.split("")
    if(newArray.length % 2 === 1) {
        middle = Math.ceil(newArray.length/2)
        return newArray[middle]
    }if(newArray.length % 2 === 0) {
        middle = (newArray.length/2)
        let  middleValue1 = newArray[middle-1]
        let middleValue2 = newArray[middle]
        return middleValue1.concat(middleValue2)    
    }
}

console.log(middleLetter(middleLetters1))
console.log(middleLetter(middleLetters2))

// --------------------4) Create a class to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

const areaSphere = (radius) => {
    return (4 * Math.PI * radius * radius)
}
console.log(areaSphere(2))
console.log(areaSphere(5))
console.log(areaSphere(11))


// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

const accumulatingSum = (array) => {
    let indexZero = array[0]
    let newArray= [indexZero]
    let i = 0
    let x = array[i]    
        for (i=0; i<array.length-1; i++){
            let y = array[i+1]
            let added = x + y
            newArray.push(added)
            x = added
        }
    return newArray
}
console.log(accumulatingSum(numbersToAdd1))
console.log(accumulatingSum(numbersToAdd2))
console.log(accumulatingSum(numbersToAdd3))