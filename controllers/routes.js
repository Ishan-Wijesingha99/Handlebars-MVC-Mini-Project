
const router = require('express').Router();
const { Pizza, Wine } = require('../models');

router.get('/pizza', async (req, res) => {
    try {
        const dbPizzaData = await Pizza.findAll()

        const dbPizzaDataFinal = dbPizzaData.map(element => element.get({plain: true}))

        res.status(200).render('pizzalist', {dbPizzaDataFinal})

    } catch (error) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.get('/wine', async (req, res) => {
    try {
        const dbWineData = await Wine.findAll()

        const dbWineDataFinal = dbWineData.map(element => element.get({plain: true}))

        res.status(200).render('winelist', {dbWineDataFinal})

    } catch (error) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;