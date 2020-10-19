INSERT INTO perfil(saldo) VALUES (2500);

SELECT * FROM perfil;

UPDATE perfil
SET saldo = 3000
WHERE perfil_id = 1;

SELECT * FROM perfil;

DELETE FROM perfil WHERE perfil_id = 1;

SELECT * FROM log_perfil;