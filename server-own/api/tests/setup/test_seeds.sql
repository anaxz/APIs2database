-- TRUNCATE = 
TRUNCATE cats, owners RESTART IDENTITY;

INSERT INTO owners (name, address) 
VALUES
('t_owner1', 'Test address 1'),
('t_owner2', 'Test address 2');

INSERT INTO cats (name, age, owner_id) 
VALUES
('cat1', 2, 1),
('cat2', 1, 1),
('cat3', 1, 2);