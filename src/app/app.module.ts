import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { UbiquiComponent }  from './components/ubiqui/ubiqui.component';
import { AgmCoreModule }    from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    UbiquiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSzaXvA5D65loGW47U6NIy2Yfq5QlNEvg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
