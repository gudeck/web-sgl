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
  InputNumberModule,
  InputTextareaModule,
  InputTextModule,
  ListboxModule,
  TableModule
} from 'primeng';

import {AppComponent} from './app.component';
import {AtorComponent} from './pages/ator/form/ator.component';
import {ClasseComponent} from './pages/classe/form/classe.component';
import {DiretorComponent} from './pages/diretor/form/diretor.component';
import {ItemComponent} from './pages/item/form/item.component';
import {TituloComponent} from './pages/titulo/form/titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    AtorComponent,
    DiretorComponent,
    ClasseComponent,
    TituloComponent,
    ItemComponent
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
    InputTextareaModule,
    InputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
