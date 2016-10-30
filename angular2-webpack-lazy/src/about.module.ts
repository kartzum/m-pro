import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'dynamic-sub-comp',
  template: `
    <h2>About</h2>
  `
})
class AboutComponent {}

export const routes = [
  { path: '', component: AboutComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export default class AboutModule {
}
