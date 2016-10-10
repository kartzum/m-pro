import * as React from "react";
import * as ReactDOM from "react-dom";

import { Writer } from "./writer";

ReactDOM.render(
    <Writer compiler="TypeScript" framework="React" />,
    document.getElementById("view")
);