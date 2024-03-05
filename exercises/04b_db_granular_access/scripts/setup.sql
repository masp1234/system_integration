-- Create tables

-- Users table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(40) NOT NULL,
    password VARCHAR(40) NOT NULL,
    city VARCHAR(30) NOT NULL
);

-- Posts table
CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    text TEXT NOT NULL,
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE
);

-- Comments table
CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
    post_id INTEGER REFERENCES posts(post_id) ON DELETE CASCADE
);

-- Insert data

-- Inserting data into the users table
INSERT INTO users (username, password, city) VALUES
    ('user1', 'password1', 'Glostrup'),
    ('user2', 'password2', 'Frederiksberg'),
    ('user3', 'password3', 'Skagen');

-- Inserting data into the posts table
INSERT INTO posts (title, text, user_id) VALUES
    ('Post 1 Title', 'This is the text of post 1.', 1),
    ('Post 2 Title', 'This is the text of post 2.', 2),
    ('Post 3 Title', 'This is the text of post 3.', 1);

-- Inserting data into the comments table
INSERT INTO comments (text, user_id, post_id) VALUES
    ('Comment 1 on Post 1', 2, 1),
    ('Comment 2 on Post 1', 3, 1),
    ('Comment 1 on Post 2', 1, 2),
    ('Comment 1 on Post 3', 2, 3);

-- Create users
CREATE USER readuser WITH PASSWORD '123';
CREATE USER rwuser WITH PASSWORD '123';

-- Grant privileges
GRANT SELECT (username, city) ON TABLE users TO rwuser;

GRANT UPDATE (city) on TABLE users to rwuser;

GRANT SELECT, INSERT ON TABLE posts TO rwuser;
GRANT UPDATE (text) on TABLE posts to rwuser;

GRANT USAGE, SELECT ON SEQUENCE posts_post_id_seq TO rwuser;

GRANT USAGE, SELECT ON SEQUENCE comments_comment_id_seq TO rwuser;
GRANT SELECT, INSERT, DELETE on table comments to rwuser;