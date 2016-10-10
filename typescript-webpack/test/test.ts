import { Writer } from "../src/writer";

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    const writer = new Writer();
    writer.start();

    const tag = document.getElementsByTagName("h1");

    expect(tag).not.toBe(null);
  });
});