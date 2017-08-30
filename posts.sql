DROP DATABASE IF EXISTS weblog_db;
CREATE DATABASE weblog_db;

\c weblog_db;

CREATE TABLE posts (
  ID SERIAL PRIMARY KEY,
  created TIMESTAMP default current_timestamp,
  author VARCHAR,
  location POINT,
  title VARCHAR,
  content VARCHAR,
  tags VARCHAR
);

INSERT INTO posts (author, location, title, content, tags)
  VALUES (
    '@tzmanics', 
    '(51.5033640,-0.1276250)', 
    'Dat Test Tho',
    'That very first test post that you hope will not be the last!',
    'test, practice, learning'
  );