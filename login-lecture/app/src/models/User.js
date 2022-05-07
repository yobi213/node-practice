"use strict";

const Userstorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    };

    login() {
        const body = this.body;
        const {id, psword} = Userstorage.getUserInfo(body.id);
        if (id) {
            if (psword === this.body.psword) {
                return {success: true};
            }
            return {success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return {success: false, msg: "존재하지 않는 아이디입니다."};
    };
};

module.exports = User;