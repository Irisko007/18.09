const product =
    {
        id: 1,
        name: "test",
        price: 100,
        category: "test1category"
}


const { id, name, price} = product
console.log(id)
console.log(price)


const numbers = [10, 20, 30]
const [num1, num2] = numbers
console.log(num2)


console.log(numbers.length) // 3

const result = numbers.filter(number => number > 10)
console.log(result) // 20, 30


const result2 = numbers.map(number => number * 2)
console.log(result2)// 20, 40, 60


numbers.forEach(number => {
    console.log(number)
})


const sameNubers = numbers

const fruits = ['apple', 'banana', 'plum']

const numbersCopy = [...numbers, ...fruits]

console.log(numbers)
console.log(numbersCopy)

console.log(Math.max(...numbers))
