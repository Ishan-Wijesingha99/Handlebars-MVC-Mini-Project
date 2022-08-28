
const { Wine } = require('../models')



const wineData = [
    {
        wine_name: 'Merlot',
        alcoholic: true
    },
    {
        wine_name: 'Syrah',
        alcoholic: true
    },
    {
        wine_name: 'Sauvignon Blanc',
        alcoholic: true
    },
    {
        wine_name: 'Airén',
        alcoholic: true
    }
]


const seedWine = () => Wine.bulkCreate(wineData)


module.exports = seedWine