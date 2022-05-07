"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    };

    async login() { // await는 비동기 함수에서만 동작함, 그래서 async 해준다.
        const client = this.body;
        const {id, psword} = await UserStorage.getUserInfo(client.id); //프로미스 반환하는 녀석을 기다려라 : await
        if (id) {
            if (psword === client.psword) {
                return {success: true};
            }
            return {success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return {success: false, msg: "존재하지 않는 아이디입니다."};
    };

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        }
        catch (err) {
            return {success: false, msg: err};
        };
    };
};

module.exports = User;