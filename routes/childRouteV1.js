const {Router} = require('express');
const { addChild, childDetail} = require("../controllers/child");
const { restrictUserWithoutToken } = require('../middlewares/authentication');

const router = Router();

router.post('/addChild',restrictUserWithoutToken(), addChild);

router.get('/:id',childDetail);



module.exports = router;