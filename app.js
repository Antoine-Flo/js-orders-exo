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


// Create a function called "filterByDateRange" that takes in the array of orders, a start date, and an end date as arguments, and returns a new array containing only the orders placed within that date range.

// Create a function called "groupByCustomer" that takes in the array of orders and returns an object where the keys are customer names and the values are arrays of orders placed by that customer.
// exemple {
//   "John Smith": [
//       { id: 1, customer: "John Smith", date: "01/01/2022", total: 50 },
//       { id: 3, customer: "John Smith", date: "01/05/2022", total: 25 },
//       { id: 5, customer: "John Smith", date: "01/09/2022", total: 30 },
//         ...
//   ],
//   "Jane Doe": [
//       { id: 2, customer: "Jane Doe", date: "01/03/2022", total: 75 },
//       { id: 4, customer: "Jane Doe", date: "01/07/2022", total: 100 },
//         ...
//   ],
//   ...
// }

// Create a function called "averageOrder" that takes in the array of orders and returns the average order total.


// At the end you should be able to create a function averageOrderByDateByCustomer that utalize the previous ones
// that takes a cutomer name, a date range in an object, and return the avergae order for that customer in that date range
const result = averageOrderByDateByCustomer('Jane Doe', {
  start: '01/02/2022',
  end: '01/24/2022',
}) // 68
