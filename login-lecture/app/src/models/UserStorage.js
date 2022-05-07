"use strict";

class UserStorage {
    // # 데이터 은닉
    static #users = {
        id: ["khsunkh", "hkim", "jooalim"],
        psword: ["1234", "1234", "123456"],
        name: ["김휘", "휘김", "주아림"]
    };    

    static getUsers(...fields){        
        const users = this.#users;
        if (fields.length > 0) {
            const newUsers = fields.reduce((newUsers, field) => {
                if (users.hasOwnProperty(field)) {
                    newUsers[field] = users[field];
                }
                return newUsers; // reduce 내에서 반환해주어야 newUsers가 갱신됨
            }, {}); // 빈 {}는 reduce 안의 newUsers의 초기값
            return newUsers;
        };
        return users;
    };

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => [id, psword, name]
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    };
};

module.exports = UserStorage;