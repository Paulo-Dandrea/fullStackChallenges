-- Verifique o impacto de um INDEX na tabela address (banco de dados sakila) adicionando-o na coluna postal_code.
--  Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. 
-- Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

CREATE INDEX idx_postal_code ON address(postal_code);

