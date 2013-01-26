var Table = require('./table.js');

var tblEmployee = {
    name: 'tblEmployees'
  , columns: {
      id: { type: 'serial' }
    , forename: { type: 'varchar(50)', max: 50 }
    , surname: { type: 'varchar(50)', max: 50 }
  }
  , primaryKey: 'id'
}

console.log(tblEmployee);

var table = new Table(tblEmployee);
console.log(table.createTableString());
console.log(table)