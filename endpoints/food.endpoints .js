const express   = require("express");
const router    = express.Router();

const {
    createFood,
    getFoods,
    updateFood,
    deleteFood
 } = require('../handlers/food.handlers');

router
    .route('/')
    .post(createFood)
    .get(getFoods); 

router
    .route('/:id')
    .put(updateFood)
    .delete(deleteFood);

module.exports = router;
