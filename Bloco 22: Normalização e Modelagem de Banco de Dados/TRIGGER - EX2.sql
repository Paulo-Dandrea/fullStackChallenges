-- Crie um Trigger para UPDATE que, ao receber uma alteração na tabela movies, 
-- deve comparar o valor anterior de ticket_price com o valor sendo inserido nesta atualização. C
-- aso o valor seja maior que o anterior, insira na coluna ticket_price_estimation o valor de 'Increasing'. Caso contrário, insira o valor 'Decreasing'.
--  Adicionalmente, insira um novo registro na tabela movies_logs, contendo informações sobre o registro alterado (movie_id, action e log_date).

DELIMITER $$ 

CREATE TRIGGER on_updating_movies
BEFORE UPDATE ON movies
FOR EACH ROW
BEGIN
IF (NEW.ticket_price > OLD.ticket_price) THEN
	SET NEW.ticket_price_estimation = 'Increasing';
    INSERT INTO movies_logs(movie_id, action, log_date) VALUES(NEW.movie_id, 'Increasing', now());
ELSE 
	SET NEW.ticket_price_estimation = 'Decreasing';
        INSERT INTO movies_logs(movie_id, action, log_date) VALUES(NEW.movie_id, 'Decreasing', now());
END IF;
END $$;

DELIMITER ;

DROP TRIGGER on_updating_movies;
-- 
SELECT * FROM movies_logs;

SELECT * FROM movies;

UPDATE movies
SET ticket_price = 19
WHERE movie_id = 5;