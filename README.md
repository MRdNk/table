table
=====

defines a table and commands for use with postgres

Example useage

```node

var Table = require ('table.js');

var employeeTable = new Table ('tblEmployees');
employeeTable.addColumn ('id', 'serial', true);
employeeTable.addColumn ('forename', 'varchar(50)');
employeeTable.addColumn ('surname', 'varchar(50)');

module.exports = employeeTable;

```