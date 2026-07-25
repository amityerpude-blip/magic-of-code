/*====================================================

            MAGIC OF CODE
            SQL DATABASE

====================================================*/

"use strict";

/*====================================================
        CREATE COMPLETE DATABASE
====================================================*/

function createSampleDatabase(){

createStudentsTable();

createTeachersTable();

createDepartmentsTable();

createBooksTable();

createResultsTable();

console.log("Sample Database Created");

}

/*====================================================
            STUDENTS
====================================================*/

function createStudentsTable(){

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

(1,'Dino','XII-A','M',95),

(2,'Ruby','XII-A','F',88),

(3,'Leo','XII-B','M',76),

(4,'Max','XII-C','M',91),

(5,'Lily','XII-B','F',82);

`);

}

/*====================================================
            TEACHERS
====================================================*/

function createTeachersTable(){

db.run(`

CREATE TABLE Teachers(

TeacherID INTEGER PRIMARY KEY,

Name TEXT,

Department TEXT,

Experience INTEGER

);

`);

db.run(`

INSERT INTO Teachers VALUES

(101,'Master SQL','Computer',15),

(102,'Master Pyro','Python',12),

(103,'Phoenix Pickle','Data Science',10),

(104,'Master CSV','Database',9);

`);

}

/*====================================================
            DEPARTMENTS
====================================================*/

function createDepartmentsTable(){

db.run(`

CREATE TABLE Departments(

DeptID INTEGER PRIMARY KEY,

Department TEXT,

Head TEXT

);

`);

db.run(`

INSERT INTO Departments VALUES

(1,'Computer','Master SQL'),

(2,'Python','Master Pyro'),

(3,'Data Science','Phoenix Pickle'),

(4,'Database','Master CSV');

`);

}

/*====================================================
                BOOKS
====================================================*/

function createBooksTable(){

db.run(`

CREATE TABLE Books(

BookID INTEGER PRIMARY KEY,

Title TEXT,

Author TEXT,

Price INTEGER

);

`);

db.run(`

INSERT INTO Books VALUES

(1,'Python Basics','Pyro',350),

(2,'SQL Magic','Master SQL',450),

(3,'Pandas Adventure','Phoenix Pickle',550),

(4,'CSV Secrets','Master CSV',300);

`);

}

/*====================================================
                RESULTS
====================================================*/

function createResultsTable(){

db.run(`

CREATE TABLE Results(

Roll INTEGER,

Subject TEXT,

Grade TEXT

);

`);

db.run(`

INSERT INTO Results VALUES

(1,'Python','A1'),

(2,'Python','A2'),

(3,'SQL','B1'),

(4,'Python','A1'),

(5,'SQL','B2');

`);

}
