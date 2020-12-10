const express = require('express');
const router = express.Router();

const indexController = require("../controllers/indexController");

//Home Page
router.get('/', indexController.home);

//Detalle Producto
router.get('/detail', indexController.detail);

//POST Mercado Pago COMPRA
router.post('/comprar', indexController.comprar)

//Confirmacion Compra
router.get('/callback', indexController.callback)


router.post('/notifications', indexController.notifications)

module.exports = router;
