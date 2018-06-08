# chance

## Setup

### Install necessary npm packages"
```
npm install
cd client
npm install
```

### Postgres setup

```
createdb zylo_chance
psql -d zylo_chance < db/ddl.sql
```

Add your Postgres credentials:

*db/pgCredentials.js*
```
module.exports = {
  host: '<your host>',
  user: '<postgres user>',
  password: ' <postgres user password> '
};
```

Importing temp/charges.json to Postgres:
```
npm run import
```
