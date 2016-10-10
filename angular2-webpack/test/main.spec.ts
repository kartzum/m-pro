import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '../src/app.module';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    const platform = platformBrowserDynamic();
    platform.bootstrapModule(AppModule);
    
    document.body.insertAdjacentHTML(
      "afterbegin", 
      "<my-app></my-app>");

    const tag = document.getElementsByTagName("h1");

    expect(tag).not.toBe(null);
  });
});