import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'dynamic-sub-comp',
  template: `
    <h2>Home</h2>
  `
})
class HomeComponent {}

export const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export default class HomeModule {
}
