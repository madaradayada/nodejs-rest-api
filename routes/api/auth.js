const express = require('express');

const router = express.Router();

const {
    register,
    login,
    getCurrent,
    logout,
  } = require('../../controllers/auth');

const { validateBody, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/user');

router.post('/register', validateBody(schemas.registerSchema), register)

router.post('/login', validateBody(schemas.loginSchema), login)

router.get('/current', authenticate, getCurrent)

router.post('/logout', authenticate, logout)

module.exports = router;