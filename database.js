var Table = require('./table');

function Database (name) {
  this.name = name;
  this.tables = [];
}

Database.prototype.addTable = function (table) {
  if (!table instanceof Table) {
    throw new Error ('Add Table: ' + table + ' is not an instance of Table');
  }
  else {
    this.tables.push (table);
  }
}

Database.prototype.createDatabaseString = function () {
  if (typeof this.name === 'undefined') {
    throw new Error ('Create Database: Database name not defined');
  }
  return 'CREATE DATABASE ' + this.name + ' /r/n';
}

Database.prototype.dropDatabaseString = function () {
  if (typeof this.name === 'undefined') {
    throw new Error ('Drop Database: Database name not defined');
  }
  return 'DROP DATABASE ' + this.name + ' /r/n';
}