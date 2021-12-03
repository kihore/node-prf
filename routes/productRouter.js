const { addProduct } = require('../controller/productController')
const router = require('express').Router()
 

router.post('/',  addProduct)
//router.get('/getcars', GetProduct)


module.exports = router