-- Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila), adicionando-o na coluna name.
--  Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores.
--  Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

SELECT * FROM category;

CREATE FULLTEXT INDEX idx_name ON category(name);


-- Após ter criado o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

-- Após ter excluído o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';