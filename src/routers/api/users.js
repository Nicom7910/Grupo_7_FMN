const express = require('express');
const router = express.Router();
const userApiController = require('../../controllers/api/apiUserController');

router.get('/', userApiController.allUsers);
router.get('/:id', userApiController.oneUser);

module.exports = router;