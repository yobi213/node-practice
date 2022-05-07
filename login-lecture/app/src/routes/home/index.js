"use strict"

const express = require("express");
const router = express.Router();

// 컨트롤러 import
const ctrl = require("./home.ctrl");

// 라우팅
router.get("/", ctrl.view.home);
router.get("/login", ctrl.view.login);
router.get("/register", ctrl.view.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;