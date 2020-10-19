-- Escreva uma query SQL para alterar o nome da coluna country_name para country, mantendo o mesmo tipo e tamanho de dados.-- 
show COLUMNS from hr.countries;
ALTER TABLE hr.countries CHANGE country_name country VARCHAR(40);