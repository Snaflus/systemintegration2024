Command to create new migration is

```
knex migrate:make initial_migration
```

See 08a for reminder on how to set up MySQL docker container
To run project in steps do:

```
knex migrate:up
knex migrate:down
knex seed:run
node index.js
```

Alternatively

```
knex migrate:latest
knex seed:run
node index.js
```

To migrate data from one MySQL server to another use run

```
node migrateData.js
```
