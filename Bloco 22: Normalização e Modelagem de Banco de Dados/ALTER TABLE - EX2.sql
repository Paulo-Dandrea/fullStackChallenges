-- Escreva uma query SQL para alterar o nome da coluna region_name para region, mantendo o mesmo tipo e tamanho de dados.

SELECT * FROM hr.regions;

SHOW COLUMNS FROM hr.regions;

ALTER TABLE hr.regions CHANGE region_name region VARCHAR(25);

