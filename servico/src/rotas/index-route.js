
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Projeto 4 Patas",
    });
});

module.exports = router;
