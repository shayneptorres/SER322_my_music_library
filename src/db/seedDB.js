import db from "./index";

var seedSQL = "INSERT INTO artists (name, formation_date, manager, no_members) VALUES ?";
var values = [
    ["Beyonce", "1990-09-12", "An alright manager guy", 1],
    ["Imagine Dragons", "2011-08-12", "Dragon guy", 4],
    ["Justin Bieber", "2013-02-20", "Cool manager guy", 1],
    ["Ed Sheeran", "2005-07-23", "A ginger guy", 1],
    ["U2", "1976-04-18", "Cool manager guy", 5]
];

db(connection => {

    connection.query("USE my_music_library", (dbErr, dbRes) => {
        if (dbErr) {
            console.log("Could not execute query: ",dbErr);
        }
    })

    connection.query(seedSQL, [values], (dbErr, res) => {
        if (dbErr) {
            console.log("Could not seed db: ");
            return
        }
        console.log("DB Seeded: ");
    })
})