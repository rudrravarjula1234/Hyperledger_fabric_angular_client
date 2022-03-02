import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssetsComponent } from './assets/assets.component';
import { MeterialModule } from './meterial/meterial.module';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MeterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
