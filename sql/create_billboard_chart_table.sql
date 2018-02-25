CREATE TABLE IF NOT EXISTS billboard_chart (
    chart_id INT AUTO_INCREMENT PRIMARY KEY, 
    position INT,
    date DATE,
    song_id INT,
    artist_id INT,
    FOREIGN KEY (song_id) REFERENCES songs(song_id),
    FOREIGN KEY (artist_id) REFERENCES artists(artist_id)
);