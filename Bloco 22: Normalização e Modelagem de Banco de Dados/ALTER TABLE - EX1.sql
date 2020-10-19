-- Escreva uma query SQL para alterar o nome da coluna street_address para address, mantendo o mesmo tipo e tamanho de dados.

USE hr;

SELECT * FROM hr.locations;

SHOW COLUMNS FROM hr.locations;

ALTER TABLE hr.locations CHANGE STREET_ADDRESS address VARCHAR(40);

