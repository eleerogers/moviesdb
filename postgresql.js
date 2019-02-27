// initialize connection with PostgreSQL database
const connection =
  'postgres://xdydlaxw:OhnXiqNJPlly595SPl_3sxJ3cn8P11wY@pellefant.db.elephantsql.com:5432/xdydlaxw';

const pgp = require('pg-promise')(/*options*/);
const db = pgp(connection);

module.exports = db;