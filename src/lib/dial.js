function mean(array) { return array.reduce((a, b) => a + b) / array.length }

// Take list of datapoints, return average rate 
// Later: just the last 30 days; for now just do the whole history
function avgrate(data) {
  const v = data.map(l => l[1])
  return mean(v) // this doesn't actually make sense yet
}

// Takes a goal g which includes roadall and data, returns new roadall
export default function dial(g) {
  const lastrow = g.roadall[g.roadall.length-1]
  return [g.roadall.slice(0, -1), [lastrow[0], lastrow[1], avgrate(g.datapoints)]]
}