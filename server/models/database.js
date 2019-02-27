const pg = require('pg');

const db = {};
const uri =
  'postgres://xdydlaxw:OhnXiqNJPlly595SPl_3sxJ3cn8P11wY@pellefant.db.elephantsql.com:5432/xdydlaxw';

pg.connect(
  uri,
  (err, db_) => {
    if (err) throw new Error(err);

    db.conn = db_;
    console.log('connected to database');
  },
);

module.exports = db;

