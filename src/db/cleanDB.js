import db from "./index";

db(connection => {

    connection.query("DROP DATABASE my_music_library", (dbErr, dbRes) => {
        if (dbErr) {
            console.log("Could not execute query: ",dbErr);
            return
        }

        console.log("Database cleaned: ",dbErr);
    })
})