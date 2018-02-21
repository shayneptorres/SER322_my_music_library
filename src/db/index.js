import mysql from "mysql";

export default callback => {
    let db = mysql.createConnection({
        host: "localhost",
        user: "storres",
        password: "password"
    });
    callback(db);
}