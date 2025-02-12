import { Knex } from 'knex';
import { db2 } from './db';

export async function setupDatabase() {
  await db2.schema.hasTable('books').then(async exists => {
    if (!exists) {
      await db2.schema.createTable('books', (table: Knex.TableBuilder) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('author').notNullable();
        table.date('date_published').notNullable();
        table.timestamp('date_added').notNullable().defaultTo(db2.fn.now());
      });
    }
  });

 console.log('MySQL connection established successfully.');
}
