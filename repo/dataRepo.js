const sql = require("mssql");
const config = require("../config");

const dataRepo = {
  getAll(value) {
    sql
      .connect(config.sqlConfig)
      .then(() => {
        return sql.query`select * from mytable where id = ${value}`;
      })
      .then((result) => {
        console.dir(result);
      })
      .catch((err) => {
        console.error(`error on query: ${err}`);
      });
  },
};

module.exports = dataRepo;
