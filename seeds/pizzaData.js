
const {Pizza} = require('../models')

const pizzaData = [
    {
        pizza_name: 'Cheese Pizza'
    },
    {
        pizza_name: 'Hawaiian Pizza'
    },
    {
        pizza_name: 'Meatlovers Pizza'
    },
    {
        pizza_name: 'Garlic Supreme Pizza'
    }
]

const seedPizza = () => Pizza.bulkCreate(pizzaData)


module.exports = seedPizza