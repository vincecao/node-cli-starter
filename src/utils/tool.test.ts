import { sum } from "./tool";

describe("Sum", () => {
  it("sums right", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
