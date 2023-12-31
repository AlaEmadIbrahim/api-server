"use strict";

const logger = require("../src/middleware/logger");

describe("Logger middlewaer test", () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log");
  
  });
  test("It's Logging req details ", () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });
  
});
