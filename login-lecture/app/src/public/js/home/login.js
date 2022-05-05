"use strict";

const { login } = require("../../../home/home.ctrl");

const id = document.querySelector("#id"),
 psword = document.querySelector("#psword"),
 loginBtn = document.querySelector("button");
loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.ariaValueMax,
        psword: psword.ariaValueMax,
    };
    console.log(req);
}