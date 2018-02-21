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

                connection.query("SELECT * FROM albums", (dbErr, dbRes) => {
                    res.render("albums",{data:dbRes});
                })
            })
        });
    })

    return api
}