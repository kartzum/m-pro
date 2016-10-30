import {Component} from "@angular/core";
@Component({
    selector: "my-app",
    templateUrl: `
    <h1>Application</h1>
    <div>
    <a routerLink="/" routerLinkActive="active">Home</a>
    <a routerLink="/about" routerLinkActive="active">About</a>
    </div>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
}