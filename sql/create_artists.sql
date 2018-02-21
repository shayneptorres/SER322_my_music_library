CREATE TABLE IF NOT EXISTS artists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    formation_date DATE,
    manager VARCHAR(255),
    no_members INT
);
