// This is a list of orders from a restaurant

const orders = [
  { id: 12, customer: 'Jane Doe', date: '01/01/2022', total: 75 },
  { id: 1, customer: 'John Smith', date: '01/01/2022', total: 50 },
  { id: 2, customer: 'Jane Doe', date: '01/03/2022', total: 75 },
  { id: 3, customer: 'John Smith', date: '01/05/2022', total: 25 },
  { id: 10, customer: 'Toto', date: '02/09/2022', total: 10 },
  { id: 4, customer: 'Jane Doe', date: '01/07/2022', total: 100 },
  { id: 5, customer: 'Jane Doe', date: '01/09/2022', total: 30 },
  { id: 6, customer: 'John Smith', date: '01/12/2022', total: 12 },
  { id: 7, customer: 'Jane Doe', date: '01/25/2022', total: 115 },
  { id: 8, customer: 'John Smith', date: '02/09/2022', total: 5 },
  { id: 11, customer: 'Toto', date: '02/09/2022', total: 10 },
  { id: 9, customer: 'John Smith', date: '01/12/2022', total: 30 },
]

// At the end of the exercice you should be able to create a function averageOrderByDateByCustomer
// It takes a cutomer name, a date range in an object, and return an object with the avergae order for that customer in that date range
const result = averageOrderByDateByCustomer('Jane Doe', {
  start: '01/02/2022',
  end: '01/24/2022',
})
console.log(result)
// {
//  customer: 'Jane Doe',
//  period: {
//   start: '01/02/2022',
//   end: '01/24/2022',
//  },
//  averageOrder: 68
//}

// For that you will create several small functions that can be used independently
// Here is a possible way to organize your code, you can use other names or organize it differently
// as long as you create at least three different functions, you can create the function you want

// Create a function called "groupByCustomer" that takes in an array of orders
// and returns an array of order for that customer groupByCustomer(orders, 'Jane Doe')

// Create a function called "filterByDateRange" that takes in an array of orders,
// a start date, and an end date as arguments, and returns a new array containing only the orders placed within that date range

// Create a function called "averageOrder" that takes in an array of orders and returns the average order total.
