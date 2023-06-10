-- config/migrations/20230608123456_add_news_table.sql
CREATE TABLE news
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    image TEXT,
    FOREIGN KEY (image) REFERENCES images (id)
);
