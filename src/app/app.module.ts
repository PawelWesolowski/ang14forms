import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MainComponent } from './main/main.component';
import { SmallComponent } from './small/small.component';
import { BigComponent } from './big/big.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    MainComponent,
    SmallComponent,
    BigComponent
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
