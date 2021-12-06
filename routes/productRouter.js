const { addProduct ,GetProduct} = require('../controller/productController')
const router = require('express').Router()
 

router.post('/',  addProduct)
router.get('/carlist', GetProduct)


module.exports = router