const express = require("express");

const router = express.Router();

const {
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
  verify,
  resendVerifyEmail,
} = require("../../controllers/auth");

const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");

router.post("/register", validateBody(schemas.registerSchema), register);

router.get('/verify/:verificationToken', verify)

router.post('/verify', validateBody(schemas.emailSchema), resendVerifyEmail)

router.post("/login", validateBody(schemas.loginSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch('/avatars', authenticate, upload.single('avatar'), updateAvatar)

module.exports = router;
