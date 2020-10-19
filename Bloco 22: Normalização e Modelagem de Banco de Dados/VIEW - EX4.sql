-- Crie uma view chamada movies_languages, usando as tabelas film e language do banco de dados sakila. Sua view deve exibir o título do filme,
--  o id do idioma e o idioma do filme, como na imagem a seguir.

SELECT * FROM film;

SELECT * FROM language;


CREATE VIEW movies_languages AS
SELECT 
f.title,
l.language_id,
l.name 
FROM film as f, language as l
WHERE f.language_id = l.language_id;

SELECT * from movies_languages;