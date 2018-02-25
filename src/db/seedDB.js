import db from "./index";

var artistSeedSQL = "INSERT INTO artists (name, formation_date, manager, no_members) VALUES ?";
var artists = [
    ["Beyonce", "1990-09-12", "An alright manager guy", 1],
    ["Imagine Dragons", "2011-08-12", "Dragon guy", 4],
    ["Justin Bieber", "2013-02-20", "Cool manager guy", 1],
    ["Ed Sheeran", "2005-07-23", "A ginger guy", 1],
    ["U2", "1976-04-18", "Cool manager guy", 5]
];

var albumSeedSQL = "INSERT INTO albums (name, release_date, recording_co, artist_id) VALUES ?";
var albums = [
    ["Lemonade", "2016-01-01", "Beautiful things", 1],
    ["4", "2011-09-09", "Beauitul things", 1],
    ["Night Visions", "2013-04-04", "DRAGONS!", 2],
    ["Never", "2009-04-04", "Lil fetus", 3],
    ["+", "2010-03-03", "Ginger Studios", 4],
    ["X", "2016-02-02", "Ginger Studios", 4],
    ["Joshua Tree", "1990-02-02", "The Best Studio", 5],
];

var songSeedSQL = "INSERT INTO songs (name, release_date, artist_id, album_id) VALUES ?";
var songs = [
    ["Lemonade", "2016-01-01", 1, 1],
    ["Spicy Girls", "2016-01-01", 1, 1],
    ["Single Ladies", "2016-01-01", 1, 1],
    ["Halo", "2016-01-01", 1, 2],
    ["Amsterdam", "2013-04-04", 2, 3],
    ["Radioactive", "2013-04-04", 2, 3],
    ["Top of the World", "2013-04-04", 2, 3],
    ["Demons", "2013-04-04", 2, 3],
    ["Never say Never", "2009-04-04", 3, 4],
    ["Baby, Baby, Baby, Ooh", "2009-04-04", 3, 4],
    ["Little Bird", "2010-03-03", 4, 5],
    ["Small Bump", "2010-03-03", 4, 5],
    ["The A Team", "2010-03-03", 4, 5],
    ["Autum Leaves", "2010-03-03", 4, 5],
    ["Bibe ya bi yeya", "2016-02-02", 4, 6],
    ["Castle on a Hill", "2016-02-02", 4, 6],
    ["Perfect", "2016-02-02", 4, 6],
    ["Joshu Tree", "1990-02-02", 5, 7]
];


var billboardSeedSQL = "INSERT INTO billboard_chart (position, date, song_id, artist_id) VALUES ?";
var billboard_chart = [
    [1, "2010-02-11", 1, 1],
    [2, "2012-04-01", 2, 1],
    [4, "2009-02-13", 4, 1],
    [5, "2014-05-14", 5, 2],
    [6, "2018-06-16", 6, 2],
    [7, "2014-06-18", 7, 2],
    [8, "2012-07-19", 8, 2],
    [9, "2015-02-15", 9, 3],
    [10, "2017-04-14", 10, 3],
    [11, "2013-05-11", 11, 4],
    [12, "2011-07-17", 12, 4],
    [13, "2010-03-03", 13, 4],
    [14, "2010-03-03", 14, 4],
    [15, "2010-03-03",15, 4],
    [16, "2016-02-02",16, 4],
    [17, "2016-02-02",17, 4],
    [18, "2016-02-02",18, 5]
];

db(connection => {

    connection.query("USE my_music_library", (dbErr, dbRes) => {
        if (dbErr) {
            console.log("Could not execute query: ",dbErr);
        }
    })

    connection.query(artistSeedSQL, [artists], (dbErr, res) => {
        if (dbErr) {
            console.log("Could not seed artists: ");
            return
        }
        console.log("Artists Seeded: ");
    })

    connection.query(albumSeedSQL, [albums], (dbErr, res) => {
        if (dbErr) {
            console.log("Could not seed albums: ");
            return
        }
        console.log("Albums Seeded: ");
    })

    connection.query(songSeedSQL, [songs], (dbErr, res) => {
        if (dbErr) {
            console.log("Could not seed songs: ");
            return
        }
        console.log("Songs Seeded: ");
    })

    connection.query(billboardSeedSQL, [billboard_chart], (dbErr, res) => {
        if (dbErr) {
            console.log("Could not seed billboards: ", dbErr);
            return
        }
        console.log("Billboards Seeded: ");
    })
})