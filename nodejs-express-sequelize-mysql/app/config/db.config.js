const db = require("../models")

module.exports = {
    HOST:"localhost",
    USER:"root",
    PASSWORD:"Sifre",
    DB:"testdb",
    dialect:"mysql",
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
}
db.sequelize.sync({ force:true }).then(() =>{
    console.log("Drop and re-sync db.");
});