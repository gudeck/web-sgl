import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonModule, CardModule, InputTextModule, TableModule} from 'primeng';

import {AppComponent} from './app.component';
import {AtorComponent} from './pages/ator/form/ator.component';

@NgModule({
  declarations: [
    AppComponent,
    AtorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
