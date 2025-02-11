const express = require('express');
const sampleController = require('./controllers/sampleController');
const sensorController = require('./controllers/sensorController')


const router = express.Router();

// Router untuk CRUD Sample
router.get('/sample', sampleController.index);
router.post('/sample', sampleController.store);
router.get('/sample/:id', sampleController.show);
router.delete('/sample/:id', sampleController.destroy);

// Router untuk CRUD Sensor
router.get('/sensor', sensorController.index);
router.post('/sensor', sensorController.store)

module.exports = router;