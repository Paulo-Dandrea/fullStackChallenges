-- Crie uma view chamada film_with_categories utilizando as tabelas category, film_category e film do banco de dados sakila. Essa view deve exibir o título do filme,
--  o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.

SELECT * FROM sakila.category;


SELECT * FROM sakila.film_category;


SELECT * FROM sakila.film;

CREATE VIEW film_with_categories AS
SELECT
title,
fm.category_id,
c.name
FROM sakila.film_category AS fm
INNER JOIN sakila.film as f ON fm.film_id = f.film_id
INNER JOIN sakila.category as c ON fm.category_id = c.category_id
ORDER BY f.title;

