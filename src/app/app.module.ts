import { NgModule } from '@angular/core';

import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
