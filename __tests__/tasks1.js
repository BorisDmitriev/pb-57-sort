const rewire = require("rewire");

describe("1. Sort `arr`", () => {
  test("`arr` should be sorted in descending order ", () => {
    const solution = rewire("../index");
    const arr = solution.__get__("arr");
    expect(arr).toEqual([8, 5, 2, 1, -10]);
  });
});

describe("2. copySorted function", () => {
  test("`copySorted` function should return a sorted copy of the passed array", () => {
    const solution = rewire("../index");
    const copySorted = solution.__get__("copySorted");
    expect(copySorted(["HTML", "JavaScript", "CSS"])).toStrictEqual(['CSS', 'HTML', 'JavaScript']);
  });
});
