SELECT * FROM hr.employees;

--  Write a query to get the average salary and number of employees working the department 90.

SELECT AVG(salary), COUNT(*) FROM hr.employees
WHERE DEPARTMENT_ID = 90;

--  Write a query to get the highest, lowest, sum, and average salary of all employees

SELECT ROUND(MAX(salary),0) 'Maximum',
ROUND(MIN(salary),0) 'Minimum',
ROUND(SUM(salary),0) 'Sum',
ROUND(AVG(salary),0) 'Average'
FROM hr.employees;

-- Write a query to get the number of employees with the same job

SELECT JOB_ID, COUNT(*) FROM hr.employees
GROUP BY JOB_ID;

--  Write a query to get the difference between the highest and lowest salaries. 

SELECT (MAX(salary) - MIN(salary)) FROM hr.employees;

-- Write a query to find the manager ID and the salary of the lowest-paid employee for that manager.

SELECT MANAGER_ID, MIN(salary) AS 'last-paid-employee'
FROM hr.employees
WHERE MANAGER_ID IS NOT NULL OR MANAGER_ID <> 0
GROUP BY MANAGER_ID
ORDER BY 'last-paid-employee' DESC;

-- Write a query to get the department ID and the total salary payable in each department

SELECT DEPARTMENT_ID, SUM(SALARY) FROM hr.employees
GROUP BY DEPARTMENT_ID;

--  Write a query to get the average salary for each job ID excluding programmer.

SELECT JOB_ID, AVG(SALARY) FROM hr.employees
GROUP BY JOB_ID
HAVING NOT 'IT_PROG';

-- 13  Write a query to get the job ID and maximum salary of the employees
-- where maximum salary is greater than or equal to $4000.
SELECT job_id, MAX(salary) 
FROM hr.employees 
GROUP BY job_id 
HAVING MAX(salary) >=4000;

-- Write a query to get the average salary for all departments employing more than 10 employees
SELECT DEPARTMENT_ID AS 'DEPARTAMENTO', COUNT(EMPLOYEE_ID) AS EMPREGADOS
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING EMPREGADOS > 10;