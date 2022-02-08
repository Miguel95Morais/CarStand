var express = require('express');
var router = express.Router();
var carModel = require("../models/carrosModel");

/* GET all carros */
router.get('/', async function (req, res, next) {
  let filterObj = req.query;
  let result = await carModel.getAll(filterObj);
  res.status(result.status).
    send(result.data);
});

/*
router.get('/filtered', async function(req, res, next) {
  let title = req.query.title;
  let artist = req.query.artist;
  let result = await albModel.getFiltered(title,artist);
  res.status(result.status).
     send(result.data);
});
*/



/* GET one carro */

// /api/carros/3
router.get('/:id', async function (req, res, next) {
  let idCarro = req.params.id;
  let result = await carModel.getOne(idCarro);
  res.status(result.status).
    send(result.data);
});


/* Post all carros */
router.post('/', async function (req, res, next) {
  let carro = req.body;
  let result = await carModel.save(carro);
  res.status(result.status).
    send(result.data);
});


module.exports = router;
