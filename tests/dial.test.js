import dial from "../src/lib/dial.js"
import { getGoals } from "../src/lib/beeminder.js"
jest.mock("../src/lib/beeminder.js")

describe("dial function", () => { 
  it("dials goal", () => {
    const r = dial({roadall: [["20210125", 0, null], ["20210201", null, 1]], datapoints: []})
    expect(r[1][2]).toEqual(0)
  })
  it("dials goal again", () => {
    const r = dial({roadall: [["20210125", 0, null], ["20210201", null, 1]], datapoints: [["20210125", 1, "comment"]]})
    expect(r[1][2]).toEqual(1)
  })
})