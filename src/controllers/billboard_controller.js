import { Router } from "express";
import db from "../db";

export default() => {
    let api = Router();

    api.get("/",(req, res) => {

        db(connection => {
            connection.connect(err => {
                if (err) {
                    console.log("There was an error: ",err);
                    res.json({"data":[],"success":false})
                }

                connection.query("USE my_music_library", (dbErr, dbRes) => {
                    if (dbErr) {
                        console.log("Could not execute query: ",dbErr);
                    }
                })

                connection.query("SELECT bc.position, bc.date, a.name as artist, s.name as song FROM billboard_chart bc LEFT JOIN artists a on bc.artist_id = a.artist_id LEFT JOIN songs s on bc.song_id = s.song_id", (dbErr, dbRes) => {
                    res.render("billboards",{data:dbRes});
                })
            })
        });
    })

    return api
}