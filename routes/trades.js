const express = require('express');
const router = express.Router();

const db = require('../models')

router.get('/', (req, res) => {
    return db.Trades.findAll()
        .then((trades) => {
            return res.send(trades)
        })
        .catch((err) => {
            console.log('Error retrieving trades')
            return res.send(err);
        })

});

router.post('/', (req, res) => {
    const { type, user_id, symbol, shares, price } = req.body;
    if (type !== 'buy' && type !== 'sell') {
        return res.status(400).send('Invalid type');
    }
    if (shares < 1 || shares > 100) {
        return res.status(400).send('Invalid shares');
    }

    console.log(req.body);

    return db.Trades.create({
        type,
        user_id,
        symbol,
        shares,
        price,
         })
        .then((trade) => {
            return res.status(201).send(trade);
        }).catch((err) => {
            console.log('Error creating trade', JSON.stringify(err));
            return res.send(err);
        });

});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    return db.Trades.findOne({
        where: {
            id
        }
    })
        .then((trade) => {
            if (!trade) {
                return res.status(404).send('ID not found');
            }
            return res.status(200).send(trade);
        })
        .catch((err) => {
            console.log('Error retrieving trade')
            return res.send(err);
        })

});

router.patch('/:id', (req, res) => {
    return res.status(405).send('Method not allowed');
});

router.put('/:id', (req, res) => {
    return res.status(405).send('Method not allowed');
});

router.delete('/:id', (req, res) => {
    return res.status(405).send('Method not allowed');
});


module.exports = router;
