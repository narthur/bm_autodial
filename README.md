# bm_autodial

## Spec

### rate autodialing

#### Option 1

`#autodial_rate_limit=10`

Every midnight, set end rate to last 30 days average

#### Option 2

Change road when more than 30 days of buffer, increase rate by... something?

#### Option 3

`new_rate = min(avg(30d-data), rate * 1.1)`

Or just:

`new_rate = avg(30d-data)`

No limit keyword

`#autodial_rate`

Do the math to get the rate right with weekends off so the rate doesn't always go down

##### Pseudocode

```
for user in users:
  goals = user.getGoals()
  filtered_goals = filter(goals)
  for goal in filtered_goals:
    points = getMonthPoints(goal)
    rate = avg(points)
    goal.updateRate(rate)
```

#### Questions

- Should it remember the state of the goal when its first initialized?
- Should only apply to do-more goals?
- Always operate at midnight, or at the goal's deadline?
- Can it just operate on the road-end rate?
- For do-less goals, at minimum you have to ensure that it won't go below the initial rate, and calculating the ... ??
- At some point maybe flag when they've reached their target goal because that feels really good? Also a queue for people to think about changing their limit.

### deadline autodialing

Required:

`#autodial_deadline_floor=8`
`#autodial_deadline_ceiling=16`

Optional:

`#autodial_deadline_head=1`
`#autodial_deadilne_tail=0.5`

Deterministically re-distribute deadlines to maximize space
between deadlines without violating constraints as possible.

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