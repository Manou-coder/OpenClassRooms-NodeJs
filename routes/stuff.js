const express = require('express');
const router = express.Router();

const auth = require('../midlleware/auth');
const multer = require('../midlleware/multer-config');

const stuffCtrl = require('../controllers/stuff');

  router.post('/', auth, multer, stuffCtrl.createThing);
  
  router.get('/:id', auth, stuffCtrl.getOneThing);

  router.put('/:id', auth, stuffCtrl.modifyThing);
  
  router.delete('/:id', auth, stuffCtrl.deleteThing);
  
  router.get('/', auth, stuffCtrl.getAllStuff);


module.exports = router;