# chance

### Setup
Run `npm install`

Create the following below file:
*db/pgCredenials.js*
```
module.exports = {
  host: '<your host>',
  user: '<postgres user>',
  password: ' <postgres user password> '
}
```

Import temp/charges.json to your Postgres database by running `npm run import`
