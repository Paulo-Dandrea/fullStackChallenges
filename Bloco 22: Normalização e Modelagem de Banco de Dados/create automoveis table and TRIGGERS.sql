CREATE DATABASE IF NOT EXISTS betrybe_automoveis;

USE betrybe_automoveis;

CREATE TABLE carros(
    id_carro INT PRIMARY KEY auto_increment,
    preco DECIMAL(12, 2) NOT NULL DEFAULT 0,
    data_atualizacao DATETIME,
    acao VARCHAR(15),
    disponivel_em_estoque BOOLEAN DEFAULT 0
) engine = InnoDB;

CREATE TABLE log_operacoes(
    operacao_id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_operacao VARCHAR(15) NOT NULL,
    data_ocorrido DATE NOT NULL
) engine = InnoDB;

SHOW COLUMNS FROM carros;
SELECT * FROM carros;
-- 
-- Crie um TRIGGER que, a cada nova inserção feita na tabela carros,
--  defina o valor da coluna data_atualizacao para o momento do ocorrido,
--  a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1.

USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER trigger_carros_insert
BEFORE INSERT ON carros
FOR EACH ROW
BEGIN
SET NEW.data_atualizacao = NOW(),
	NEW.acao = 'INSERT',
    NEW.disponivel_em_estoque = 1;
END; $$

DELIMITER ;

DROP TRIGGER trigger_carros_insert;

INSERT INTO carros(preco) VALUES(10000); 

-- 2 - Crie um TRIGGER que, a cada atualização feita na tabela carros, 
-- defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO'.
-- 

DELIMITER $$
CREATE TRIGGER trigger_carros_uptadte
	BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
    NEW.acao = 'ATUALIZAÇÃO';
END; $$
DELIMITER ;

UPDATE carros SET preco = 250000 WHERE id_carro = 2;

SELECT * FROM carros;
-- 
-- Crie um TRIGGER que, a cada exclusão feita na tabela carros,
--  envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.

DELIMITER $$
CREATE TRIGGER trigger_delete_carros
	AFTER DELETE ON carros
    FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES('excluding', NOW());
END; $$
DELIMITER ;

DELETE FROM carros WHERE id_carro = 1;



