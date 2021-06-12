const mongoose = require("mongoose");

//1. 몽고디비 접속할 떄 필여한 정보를 만들어야함
//2. 접속시더



const connectData = {
    DB_ID : "4leaf",
    DB_PASSWORD : "fourleaf0309",
    DB_HOST : "210.114.1.127",
    DB_PORT : "27017",
    DB_USER : "admin",
    DB_NAME : "SCH_HDG",
};

const connect = () => {
    mongoose.connect(`mongodb://${connectData.DB_ID}:${connectData.DB_PASSWORD}@${connectData.DB_HOST}:${connectData.DB_PORT}/${connectData.DB_USER}`,
    {
        dbName : connectData.DB_NAME,
        useNewUrlParser: true,
        useCreateIndex : true,
    },
    (error) => {
        if(error) {
            console.log(error);
            console.log(`X Failed To MongoDB Connect :: ${connectData.DB_NAME}`);
        } else {
            console.log(`O SUCCES To Connect MongoDB :: ${connectData.DB_NAME}`);
        }
    }
    )
};

module.exports = connect;