import knex, { Knex } from 'knex';

let db2: Knex;
db2 = knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'user',
    password: 'userpassword',
    database: 'mydatabase',
    port: 3306,
  },
});

export { db2 };
