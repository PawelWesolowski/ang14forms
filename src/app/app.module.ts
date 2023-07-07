import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SmallComponent } from './small/small.component';
import { BigComponent } from './big/big.component';
import { BothComponent } from './both/both.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SmallComponent,
    BigComponent,
    BothComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
