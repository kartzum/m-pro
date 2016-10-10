import * as React from "react";
import * as ReactDOM from "react-dom";

import { Writer } from "../src/writer";

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    document.body.insertAdjacentHTML(
      "afterbegin", 
      "<div id = 'view'></div>");

    ReactDOM.render(
      React.createElement(Writer, null),
      document.getElementById('view')
    );  

    const tag = document.getElementsByTagName("h1");

    expect(tag).not.toBe(null);
  });
});