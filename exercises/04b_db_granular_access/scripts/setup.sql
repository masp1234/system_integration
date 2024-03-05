-- Create tables

-- Users table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Posts table
CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
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
INSERT INTO users (username, password) VALUES
    ('user1', 'password1'),
    ('user2', 'password2'),
    ('user3', 'password3');

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
GRANT ALL PRIVILEGES ON TABLE users TO rwuser;
GRANT SELECT, INSERT, UPDATE ON TABLE posts TO rwuser;