# chance

## Setup

### Install necessary npm packages
From root
```
npm install
cd client
npm install
```

### Postgres setup
Create and seed the database
```
createdb zylo_chance
psql -d zylo_chance < db/ddl.sql
```

Add your Postgres credentials by creating a file db/pgCredentials.js with the following:
```
module.exports = {
  host: '<your host>',
  user: '<postgres user>',
  password: ' <postgres user password>'
};
```

Importing temp/charges.json to Postgres:
```
npm run import
```
