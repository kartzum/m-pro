/* @flow */

export class C {
  x: string;
  y: number;
  constructor(x) { this.x = x; }
  foo() { return this.x; }
  bar(y) { this.y = y; }
}

window["service"] = new C("51");