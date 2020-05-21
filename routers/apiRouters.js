const express = require('express');
const { registerUser, loginUser } = require('../controllers/userControllers');
const {  validation } = require('../middlewares/validations');
const { addStock, getEntireStock, deleteStock, updateInventory } = require('../controllers/inventoryControllers');
const { addCategory, allCategory, specificCategory } = require('../controllers/categoryController');
const { createItem, specificItem, deleteItem, allItems } = require('../controllers/itemControllers');



const router = express.Router()

router.post('/users/auth/signup',validation , registerUser);
router.post('/users/auth/login',loginUser);
router.post('/inventory',  addStock);
router.get('/inventory', getEntireStock);
router.delete('/inventory/:id', deleteStock);
router.put('/inventory/:id', updateInventory);
router.post('/category', addCategory);
router.get('/inventory/categories', allCategory);
router.get('/inventory/category/:id', specificCategory);
router.post('/items', createItem);
router.get('/items/:Id', specificItem);
router.delete('/items/:Id', deleteItem);
router.get('/items', allItems);



    
module.exports = router;
