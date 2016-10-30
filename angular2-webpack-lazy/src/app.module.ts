declare var System;

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from "./app.component";

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return System.import('./home.module').then((m: any) => {
        return m.default;
      });
    }
  },
  {
    path: 'about',
    loadChildren: () => {
      return System.import('./about.module').then((m: any) => {
        return m.default;
      });
    }
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [
        BrowserModule,
        routes
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}