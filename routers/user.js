const express = require("express");
const router = express.Router();
const useController = require("../controllers/user");
const { validateToken } = require("../middlewares/AuthMiddleware");
const {
  userValidationResult,
  userValidator,
} = require("../middlewares/userValidator");

router.post(
  "/signup",
  userValidator,
  userValidationResult,
  useController.postSignup
);

router.post("/login", useController.postLogin);

router.get("/username", validateToken, useController.getUsername);

module.exports = router;
