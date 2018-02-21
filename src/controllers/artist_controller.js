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

                connection.query("SELECT * FROM artists", (dbErr, dbRes) => {
                    console.log("Made it here: ",dbRes);
                    res.render("artists",{data:dbRes});
                })
            })
        });
    })

    api.get("/:id",(req, res) => {

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

                const artistID = req.params.id;

                connection.query(`SELECT * FROM artists where artist_id = ${artistID}`, (dbErr, dbRes1) => {
                    connection.query(`SELECT * FROM albums where artist_id = ${dbRes1[0].artist_id}`, (dbErr, dbRes2) => {                        
                        connection.query(`SELECT s.name as song_name, s.release_date, al.name as album_name, al.recording_co FROM songs s LEFT JOIN albums al on al.album_id = s.album_id where s.artist_id = ${dbRes1[0].artist_id}`, (dbErr, dbRes3) => {
                            res.render("artist_detail",{artist:dbRes1[0], albumsData:dbRes2, songsData:dbRes3});
                        })
                    })
                })
            })
        });
    })

    return api
}