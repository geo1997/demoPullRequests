const express = require('express');
const router = express.Router();

/*
 event User ,to
 register User: POST
 login User : POST
 */

const {register,login,loadProfile} = require('../controllers/User');

router.post("/user/register",register);
router.post("/user/login",login);
router.get("/user/profile",loadProfile)



module.exports = router;