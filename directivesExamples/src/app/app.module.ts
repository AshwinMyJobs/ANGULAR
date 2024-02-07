import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfComponent } from './components/if/if.component';
import { SwitchComponent } from './components/switch/switch.component';
import { NonbindableComponent } from './components/nonbindable/nonbindable.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { DynamicngclassComponent } from './dynamicngclass/dynamicngclass.component';

@NgModule({
  declarations: [
    AppComponent,
    IfComponent,
    SwitchComponent,
    NonbindableComponent,
    NgstyleComponent,
    NgClassComponent,
    DynamicngclassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
