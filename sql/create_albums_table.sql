CREATE TABLE IF NOT EXISTS albums (
    album_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    release_date DATE,
    recording_co VARCHAR(255),
    artist_id INT,
    FOREIGN KEY (artist_id) REFERENCES artists(artist_id)
);