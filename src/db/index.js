import mysql from "mysql";

export default callback => {
    let db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: ""
    });
    callback(db);
}