import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AtorComponent} from './pages/ator/form/ator.component';
import {ClasseComponent} from './pages/classe/form/classe.component';
import {ClienteComponent} from './pages/cliente/form/cliente.component';
import {DiretorComponent} from './pages/diretor/form/diretor.component';
import {ItemComponent} from './pages/item/form/item.component';
import {TituloComponent} from './pages/titulo/form/titulo.component';

const routes: Routes = [
  {path: 'titulos', component: TituloComponent},
  {path: 'atores', component: AtorComponent},
  {path: 'diretores', component: DiretorComponent},
  {path: 'classes', component: ClasseComponent},
  {path: 'itens', component: ItemComponent},
  {path: 'clientes', component: ClienteComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
