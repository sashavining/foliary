const express = require('express')
const router = express.Router()
const Plant = require('../models/plant')


router.get('/', async (req, res) => {
    let plants;
    try {
        plants = await Plant.aggregate([
            {$sample: {size: 10}}
        ], function (err, docs) {
            console.log(docs)
        })
    } catch {
        plants = []
    }
    res.render('index', { plants: plants })
});

module.exports = router;