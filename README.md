table
=====

defines a table and commands for use with postgres

Example usage

```node

var Table = require ('table.js');

var employeeTable = new Table ('tblEmployees');
employeeTable.addColumn ('id', 'serial', true);
employeeTable.addColumn ('forename', 'varchar(50)');
employeeTable.addColumn ('surname', 'varchar(50)');

employeeTable.createTableString ();
employeeTable.dropTableString ();
employeeTable.selectString ();


```

database
========

define a database and commands for use with postgres / ms sql

Example usage

```node

var Database = require ('database.js');

var employeeApi = new Database ('EmployeeAPI');
employeeApi.addTable (employeeTable);

employeeApi.createDatabaseString ();
employeeApi.dropDatabaseString ();


```

- Want to add: Database create tables