import db from "./index"
import fs from "fs";

export default () => {

    db(connection => {

        var create_db_sql = fs.readFileSync('./sql/create_db.sql').toString();
        var create_artists_sql = fs.readFileSync('./sql/create_artists_table.sql').toString();
        var create_songs_sql = fs.readFileSync('./sql/create_songs_table.sql').toString();
        var create_albums_sql = fs.readFileSync('./sql/create_albums_table.sql').toString();
        var create_billboards_sql = fs.readFileSync('./sql/create_billboard_chart_table.sql').toString();
        
        connection.connect(err => {
            if (err) {
                console.log("There was a problem: ");
                return
            }
        
            console.log("Connected!");
        
            // Create the dabase
            connection.query(create_db_sql, (dbErr, res) => {
                if (dbErr) {
                    console.log("Could not create DB: ");
                    return
                }
                console.log("Database created: ");
            })

            // use the database
            connection.query("USE my_music_library;", (dbErr, res) => {
                if (dbErr) {
                    console.log("Could not access DB: ");
                    return
                }
                console.log("Database accessed: ");
            })

            // create the tables

            //// Create artists
            connection.query(create_artists_sql, (dbErr, res) => {
                if (dbErr) {
                    console.log("Could not create artists: ");
                    return
                }
                console.log("Table 'artists' created: ");
            })

            //// Create albums
            connection.query(create_albums_sql, (dbErr, res) => {
                if (dbErr) {
                    console.log("Could not create albums: ");
                    return
                }
                console.log("Table 'albums' created: ");
            })

            //// Create songs
            connection.query(create_songs_sql, (dbErr, res) => {
                if (dbErr) {
                    console.log("Could not create songs: ");
                    return
                }
                console.log("Table 'songs' created: ");
            })

            //// Create BILLBOARDS
            connection.query(create_billboards_sql, (dbErr, res) => {
                if (dbErr) {
                    console.log("Could not create billboards: ");
                    return
                }
                console.log("Table 'billbords' created: ");
            })

        })
    })
}

