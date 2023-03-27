import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WhereAtComponent } from './where-at/where-at.component';
import { DressComponent } from './dress/dress.component';
import { WhatToDoComponent } from './what-to-do/what-to-do.component';
import { WhereToStayComponent } from './where-to-stay/where-to-stay.component';
import { RegistryComponent } from './registry/registry.component';
import { RSVPComponent } from './rsvp/rsvp.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    WhereAtComponent,
    DressComponent,
    WhatToDoComponent,
    WhereToStayComponent,
    RegistryComponent,
    RSVPComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
