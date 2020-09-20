/* Replace with your SQL commands */

CREATE TRIGGER update_timestamp 
BEFORE UPDATE 
ON users FOR EACH ROW 
EXECUTE PROCEDURE update_timestamp();