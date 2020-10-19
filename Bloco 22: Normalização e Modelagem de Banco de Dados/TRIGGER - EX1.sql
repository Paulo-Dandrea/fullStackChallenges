DELIMITER $$

CREATE TRIGGER on_insert_release_year
BEFORE INSERT
ON movies
FOR EACH ROW

BEGIN
	SET NEW.release_year = YEAR(NOW());
--
END $$;

DELIMITER ;

 DROP TRIGGER on_insert_release_year;


DELIMITER $$

CREATE TRIGGER on_insert_movies_logs
AFTER INSERT
ON movies
FOR EACH ROW

BEGIN
	INSERT INTO movies_logs(movie_id, action, log_date) VALUES(NEW.movie_id, 'insert', now());
END $$;

DELIMITER ;

 DROP TRIGGER on_insert_movies_logs;


SELECT * FROM BeeMovies.movies;
SELECT * FROM BeeMovies.movies_logs;


INSERT INTO movies(ticket_price) VALUES (19.99);