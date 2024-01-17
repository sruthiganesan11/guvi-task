use w3schools;  -- Database

-- CREATING TABLE EMPLOYEE
create table `Empl`(
`empno` int not null,
`ename` varchar(255) not null,
`job` varchar(255) not null,
`mgr` int,
`hiredate` DATE not null,
`sal` double not null,
`com` double,
`deptno` int not null,
PRIMARY KEY (`empno`),
UNIQUE KEY `empl` (`empno`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8MB4;
 
-- INSERTING VALUES INTO EMPLOYEES TABLE

insert into `Empl`(`empno`,`ename`,`job`,`mgr`,`hiredate`,`sal`,`com`,`deptno`)
values(8369,'SMITH','CLERK',8902,'1990-12-18',800.00,NULL,20),
(8499,'ANYA','SALESMAN',8698,'1991-02-20',1600.00,300.00,30),
(8521,'SETH','SALESMAN',8698,'1991-02-22',1250.00,500.00,30),
(8566,'MAHADEVAN','MANAGER',8839,'1991-04-02',2985.00,NULL,20),
(8654,'MOMIN','SALESMAN',8698,'1991-09-28',1250.00,1400.00,30),
(8698,'BINA','MANAGER',8839,'1991-05-01',2850.00,NULL,30),
(8882,'SHIVANSH','MANAGER',8839,'1991-06-09',2450.00,NULL,10),
(8888,'SCOTT','ANALYST',8566,'1992-12-09',3000.00,NULL,20),
(8839,'AMIR','PRESIDENT',NULL,'1991-11-18',5000.00,NULL,10),
(8844,'KULDEEP','SALESMAN',8698,'1991-09-08',1500.00,0.00,30);

-- EMPLOYEES WHOSE SALARY IS GREATER THAN 2200
SELECT ename,sal FROM Empl WHERE sal >=2200;


-- EMPLOYEES WITHOUT COMMISSION
SELECT * FROM Empl WHERE com is NULl;


-- EMPLOYEES WHOSE SALARY IS LESS THAN 2500 AND GREATER THAN 4000
SELECT ename,sal FROM Empl where sal <2500 OR sal >4000;


-- EMPLOYEES WHO DON'T HAVE MANAGER
SELECT ename,job,sal FROM Empl WHERE mgr IS NULL;


-- EMPLOYEES WHOSE THIRD LETTER IS A
SELECT ename FROM Empl WHERE ename LIKE'__a%';


-- EMPLOYEES WHOSE LAST LETTER IS T
SELECT ename FROM Empl WHERE ename LIKE'%t';

drop table Empl;

create index idx on Empl(job);
-- CREATING TABLE EMPLOYEE FOR JDBC CONNECTOR
create table `Emp`(
`empcode` int NOT NULL auto_increment,
`empname` varchar(255) NOT NULL,
`empage` int NOT NULL,
`empsalary` int NOT NULL,
PRIMARY KEY (`empcode`),
UNIQUE KEY `Emp` (`empcode`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8MB4;

SELECT * FROM Emp;

drop table Emp;




