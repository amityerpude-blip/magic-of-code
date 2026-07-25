/*====================================================

            MAGIC OF CODE
            SQL DATABASE

====================================================*/

"use strict";

/*====================================================
        CREATE SAMPLE DATABASE
====================================================*/

function createSampleDatabase(){

db.run(`

CREATE TABLE Students(

Roll INTEGER PRIMARY KEY,

Name TEXT,

Class TEXT,

Gender TEXT,

Marks INTEGER

);

`);

db.run(`

INSERT INTO Students VALUES

(1,'Dino','XII-A','Male',95),
(2,'Ruby','XII-A','Female',88),
(3,'Max','XII-B','Male',91),
(4,'Lily','XII-C','Female',82),
(5,'Leo','XII-A','Male',76);

`);

db.run(`

CREATE TABLE Books(

BookID INTEGER PRIMARY KEY,

BookName TEXT,

Author TEXT,

Price INTEGER

);

`);

db.run(`

INSERT INTO Books VALUES

(101,'Python Basics','Master Pyro',350),
(102,'SQL Magic','Dragon SQL',420),
(103,'Pandas Paradise','Master Pandas',380),
(104,'NumPy Caverns','Wizard NumPy',450);

`);

db.run(`

CREATE TABLE Employees(

EmpID INTEGER PRIMARY KEY,

EmpName TEXT,

Department TEXT,

Salary INTEGER

);

`);

db.run(`

INSERT INTO Employees VALUES

(1,'Alex','HR',45000),
(2,'John','Sales',52000),
(3,'Emma','IT',68000),
(4,'Sophia','Accounts',61000);

`);

}
