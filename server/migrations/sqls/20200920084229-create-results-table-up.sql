/* Replace with your SQL commands */

CREATE TABLE results(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    score INT NOT NULL,
    inserted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER update_timestamp 
BEFORE UPDATE 
ON results FOR EACH ROW 
EXECUTE PROCEDURE update_timestamp();