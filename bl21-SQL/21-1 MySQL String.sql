-- 1. Write a query to get the job_id and related employee's id.
SELECT JOB_ID, GROUP_CONCAT(EMPLOYEE_ID) 
FROM hr.employees
GROUP BY JOB_ID;

-- 2. Write a query to update the portion of the phone_number
-- in the employees table, within the phone number the 
-- substring '124' will be replaced by '999'.

SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '124', '999') -- https://stackoverflow.com/questions/17365222/update-and-replace-part-of-a-string
WHERE phone_number LIKE '%124%'; -- THIS PART I'VE RIPPED FROM THE SITE ITSELF.

-- 3. Write a query to get the details of the employees
-- where the length of the first name greater than or equal to 8

SELECT * FROM hr.employees
WHERE LENGTH(FIRST_NAME)>= 8;

-- 4. Write a query to display leading zeros before maximum and minimum salary. table: jobs

SELECT job_id,  LPAD( max_salary, 7, '0') ' Max Salary',
LPAD( min_salary, 7, '0') ' Min Salary' 
FROM jobs;

-- 5 Write a query to append '@example.com' to email field.

SELECT CONCAT(EMAIL, '@example.com') FROM hr.employees;

-- resposta certa:
UPDATE hr.employees SET EMAIL = CONCAT(EMAIL, '@example.com');
-- ou seja, era para atualizar os valores

-- 6. Write a query to get the employee id, first name and hire month.

SELECT EMPLOYEE_ID, FIRST_NAME,  MONTH(HIRE_DATE), EMAIL
FROM hr.employees;

-- 7. Write a query to get the employee id, email id (discard the last three characters).

SELECT EMPLOYEE_ID, LEFT(EMAIL, LENGTH(EMAIL) -3) AS 'EMAIL' FROM hr.employees;

-- falta subir os commits depois que acabar os exercícios 

-- 8. Write a query to find all employees where first names are in upper case. 

SELECT * FROM hr.employees WHERE FIRST_NAME = BINARY UPPER(FIRST_NAME); -- A parte do binary tive que colar

-- 9. Write a query to extract the last 4 character of phone numbers
SELECT RIGHT(PHONE_NUMBER, 4) FROM hr.employees;