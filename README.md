# bm_autodial

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and enzyme
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

## Repl.it Notes

### Usage

* Hit "Run" button to run tests (or, alternatively, run `npm run test` directly in the `Console` pane)
* Run `npm run dev` in `Shell` pane to launch app
* Open app at <https://bmautodial.narthur.repl.co>

### Database

https://docs.repl.it/misc/database

```js
const Database = require("@replit/database")
const db = new Database()
db.set("key", "value").then(() => {});
db.get("key").then(value => {});
db.delete("key").then(() => {});
db.list().then(keys => {});
db.list("prefix").then(matches => {});
```

## Todo

Use [UptimeRobot](https://uptimerobot.com/) to hit cron route every 24 hours