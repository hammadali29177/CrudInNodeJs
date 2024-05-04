const express = require('express');
//const routes = express.routes();
const routes = express.Router()
const {homeController, createController} = require('../controllers/homeController')
const readController = require('../controllers/readController')
const {editController, updateController, deleteController} = require('../controllers/editController')

routes.get('/', homeController);
routes.post('/', createController)
routes.get('/read/', readController)
routes.get('/edit/:id', editController);
routes.post('/update/:id', updateController);
routes.get('/delete/:id', deleteController);

module.exports = routes;
//export default routes;