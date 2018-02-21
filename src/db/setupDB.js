import db from "./index"
import fs from "fs";

export default () => {

    db(connection => {

        var create_db_sql = fs.readFileSync('./sql/create_db.sql').toString();
        var create_artists_sql = fs.readFileSync('./sql/create_artists.sql').toString();
        var seed_db = fs.readFileSync('./sql/seed/seed_db.sql').toString();
        
        connection.connect(err => {
            if (err) {
                console.log("There was a problem: ", err);
                return
            }
        
            console.log("Connected!");
        
            // Create the dabase
            connection.query(create_db_sql, (dbErr, res) => {
                if (dbErr) {
                    console.log("Could not create DB: ", err);
                    return
                }
                console.log("Database created: ", res);
            })

            // use the database
            connection.query("USE my_music_library;", (dbErr, res) => {
                if (dbErr) {
                    console.log("Could not access DB: ", err);
                    return
                }
                console.log("Database accessed: ", res);
            })

            // create the tables
            connection.query(create_artists_sql, (dbErr, res) => {
                if (dbErr) {
                    console.log("Could not create tables: ", err);
                    return
                }
                console.log("Tables created: ", res);
            })

            // connection.query(seed_db, (dbErr, res) => {
            //     if (dbErr) {
            //         console.log("Could not seed db: ", err);
            //         return
            //     }
            //     console.log("DB Seeded: ", res);
            // })
        })
    })
}

