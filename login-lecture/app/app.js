"use strict"

// 모듈
const express = require("express");
// const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들웨어 세팅 (반드시 /에 대한 미들웨어 등록 이전에 수행되어야 함)
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true }));

// 미들웨어 등록 메서드
app.use("/", home);


module.exports = app;