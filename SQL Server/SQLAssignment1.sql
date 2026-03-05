--creating Database
create database Office
--use the database
Use Office
--creating worker table
create table Worker(
Worker_Id int primary key identity(1,1),
first_name varchar(25),
last_name varchar(25),
salary int,
joining_date datetime,
department char(25)
);
--create bonus table
create table bonus(
worker_ref_id int,
bonus_amount int,
bonus_date datetime,
foreign key(worker_ref_id) references worker(worker_id)
on delete cascade
);
--creating title table
create table title(
worker_ref_id int,
worker_title char(25),
affected_from datetime,
foreign key(worker_ref_id)
references worker(worker_id)
on delete cascade
);
--inserting data into the worker table
insert into worker values
('monika','arora',100000,'2014-02-20 09:00:00','Hr'),
('Niharika','verma',80000,'2014-06-11 09:00:00','Admin'),
('Vishal','singhal',300000,'2014-02-20 09:00:00','Hr'),
('Amitabh','singh',500000,'2014-02-20 09:00:00','Admin'),
('vivek','bhati',500000,'2014-06-11 09:00:00','Admin'),
('vvipul','diwan',200000,'2014-06-11 09:00:00','Account'),
('satish','kumar',75000,'2014-01-20 09:00:00','Account'),
('geetika','chauhan',90000,'2014-04-11 09:00:00','Admin');
--inserting data into bonus table
insert into bonus(worker_ref_id,bonus_date,bonus_amount) values
(1,'2016-02-20 00:00:00',5000),
(2,'2016-06-11 00:00:00',3000),
(3,'2016-02-20 00:00:00',4000),
(4,'2016-02-20 00:00:00',4500),
(5,'2016-06-11 00:00:00',3500);
--inserting data into title table
insert into title values
(1,'manager','2016-02-20 00:00:00'),
(2,'Executive','2016-02-20 00:00:00'),
(8,'Executive','2016-02-20 00:00:00'),
(5,'manager','2016-02-20 00:00:00'),
(4,' Asst.manager','2016-02-20 00:00:00'),
(7,'Executive','2016-02-20 00:00:00'),
(6,'Lead','2016-02-20 00:00:00'),
(3,'Lead','2016-02-20 00:00:00');
select*from worker;
select *from bonus;
select *From title;
--1
select first_name as worker_name from worker;
--2
select upper(first_name) from worker;
--3
select distinct department from worker;
--4
select left(first_name,3) from worker;
--5
select charindex('a',first_name) as position_of_a from worker where first_name='Amitabh';
--6
select rtrim(first_name) from worker;
--7
select ltrim(department) from worker;
--8
select distinct department,len(department) as dept_length from worker;
--9
select replace(first_name,'a','A') from worker;
--10
select concat(first_name,' ',last_name) as complete_name from worker;
--11
select *from worker order by first_name asc;
--12
select *from worker order by first_name asc,last_name desc;
--13
select *From worker where first_name in('vvipul','satish');
--14
select *from worker where first_name<>'vvipul' and first_name<>'satish';
--14
select *from worker where first_name not in('vvipul','satish');
--15
select *from worker where department='admin';
--16
select *from worker where first_name like '%a%';
--17
select *from worker where first_name like '%a';
--18
select *from worker where first_name like '_____h';
--19
select *from worker where salary between 100000 and 500000;
--20
select *from worker where joining_date>='2014-02-01' and joining_date<='2014-02-28';
--21
select *from worker where salary>=50000 and salary<=100000;
--22
SELECT department, COUNT(worker_id) AS Total_Workers
FROM worker
GROUP BY department
ORDER BY Total_Workers DESC;
--24
select sysdatetime();
--25
select  top 10* from worker;
