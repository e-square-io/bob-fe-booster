import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {FormsModule} from "@angular/forms";
import { CalculatorComponent } from './calculator/calculator.component';
import { SideBarComponent } from './side-bar/side-bar.component';

import { CounterModule } from './counter/counter.module';
import { CardModule } from './card/card.module';
import { HighlightModule } from './highlight/highlight.module';
import {FeedModule} from "./feed/feed.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {BranchModule} from "./branch/branch.module";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CalculatorComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CounterModule,
    CardModule,
    HighlightModule,
    FeedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BranchModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
