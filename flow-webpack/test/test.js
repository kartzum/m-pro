import { Writer } from "../src/writer";

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    const result = new Writer("51").foo();

    expect(result).toBe("51");
  });
});