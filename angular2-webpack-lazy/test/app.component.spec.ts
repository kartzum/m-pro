import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing/router_testing_module";
import { Routes } from '@angular/router';

import { AppComponent } from "../src/app.component";

export const fake_routes: Routes = [
    { path: "test", component: AppComponent },
];

describe("App", () => {
    beforeEach(() => {
        TestBed.configureTestingModule(
            {
                declarations: [AppComponent],
                imports: [RouterTestingModule.withRoutes(fake_routes)
                },
        );
    });
    it("should work", () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, "should create AppComponent");
    });
});