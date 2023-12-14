//#data 1

const supermarketProducts = [
    { name: 'Apple', price: 2.5, quantity: 10, discount: 5 },
    { name: 'Banana', price: 1.0, quantity: 8, discount: 3 },
    { name: 'Milk', price: 3.0, quantity: 2, discount: 0 },
    { name: 'Bread', price: 2.0, quantity: 5, discount: 2 },
    { name: 'Eggs', price: 1.5, quantity: 12, discount: 1 },
    { name: 'Chicken', price: 5.0, quantity: 3, discount: 8 },
    { name: 'Rice', price: 4.0, quantity: 7, discount: 4 },
    { name: 'Tomatoes', price: 1.8, quantity: 6, discount: 2 },
    { name: 'Pasta', price: 2.2, quantity: 4, discount: 1 },
    { name: 'Cheese', price: 3.5, quantity: 3, discount: 5 },
    { name: 'Yogurt', price: 1.2, quantity: 8, discount: 0 },
    { name: 'Cereal', price: 2.8, quantity: 3, discount: 3 },
    { name: 'Orange Juice', price: 3.5, quantity: 2, discount: 2 },
    { name: 'Salmon', price: 8.0, quantity: 1, discount: 10 },
    { name: 'Cucumber', price: 1.0, quantity: 5, discount: 1 },
    { name: 'Chocolate', price: 2.5, quantity: 4, discount: 3 },
    { name: 'Shampoo', price: 4.0, quantity: 2, discount: 0 },
    { name: 'Toothpaste', price: 1.5, quantity: 3, discount: 1 },
    { name: 'Towel', price: 5.0, quantity: 1, discount: 5 },
    { name: 'Laundry Detergent', price: 3.0, quantity: 2, discount: 2 },
  ];


  //Data 2
  const data = [1,3,5,6,"hello", "guava", "hello world", 34,56 ,54]
  const numberArry = [453,656,67645,5476,798,5678,989,34545,6465768,79,76545364,75,8789,987,64765,]




//Surprise!!!!

// Questions Contd


//. Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17|.

// Function description


// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference
// Input Format

// Constraints

// Output Format

// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.


// example 2 for better understanding
// Sample Input

// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15


//Question [40Mks]


arr = [
    11  3  6
    9   5   8
    10  7 -12
]

function arrDiagonalDifference(arr) { //this is the function, remember?
    // Write your code here

}


console.log(arrDiagonalDifference(arr)) //im calling the function here for you to see you result


