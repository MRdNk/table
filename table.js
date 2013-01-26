function Table (opts) {
  this.opts = null;
  this.name = null;
  this.columns = [];
  this.versionNo = null;

  if(typeof opts !== 'object') {
    this.name = opts;
  } else {
    this.opts = opts;
    this.name = this.opts.name;
    for(var key in this.opts.columns) {
      if(this.opts.columns.hasOwnProperty(key)) {
        if(this.opts.primaryKey === key) {
          this.addColumn(key, this.opts.columns[key].type, true);
        } else {
          this.addColumn(key, this.opts.columns[key].type);
        } 
      } 
    }
  }

}

Table.prototype.addColumn = function (name, type, primary) {
  var that = this;

  var regex = /\((.*)\)/;
  var match = type.match(regex);
  var length = (match != null) ? match[0].replace(regex, '$1') : null;
  
  function Column (name, type, length, primary) {
    this.name = name;
    this.type = type;
    this.length = length;
    this.primary = primary || false;
    return this;
  }

  var col = new Column (name, type, length, primary);
  this.columns.push (col);
  
};

Table.prototype.createTableString = function () {
  var that = this;

  var primary = null;
  var create = 'CREATE TABLE "' + that.name + '" (';

  for(var i = 0; i < that.columns.length; i++) {
    if (i !== 0) { create += ', '; }
    create += that.columns[i].name + ' ' + that.columns[i].type;

    if (that.columns[i].primary === true) {
      if (primary != null) {
        console.error ('Table defined with more than one primary key: ' + that.name);
      }
      primary = that.columns[i].name;
    }
  }

  if (primary !== null) {
    create += ', PRIMARY KEY (' + primary + ')';
  }
  create += ')';

  return create;

};

Table.prototype.dropTableString = function () {
  return 'DROP TABLE ' + this.name;
};

Table.prototype.selectString = function (opts) {
  var that = this;

  return 'SELECT * FROM ' + that.name;
};

module.exports = Table;