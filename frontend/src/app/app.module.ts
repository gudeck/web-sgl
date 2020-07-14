import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  AutoCompleteModule,
  ButtonModule,
  CalendarModule,
  CardModule,
  DropdownModule,
  InputTextareaModule,
  InputTextModule,
  ListboxModule,
  TableModule
} from 'primeng';

import {AppComponent} from './app.component';
import {AtorComponent} from './pages/ator/form/ator.component';
import {ClasseComponent} from './pages/classe/form/classe.component';
import {DiretorComponent} from './pages/diretor/form/diretor.component';
import {TituloComponent} from './pages/titulo/form/titulo/titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    AtorComponent,
    DiretorComponent,
    ClasseComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    ListboxModule,
    AutoCompleteModule,
    DropdownModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
