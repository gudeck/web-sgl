import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AtorComponent} from './pages/ator/form/ator.component';
import {ClasseComponent} from './pages/classe/form/classe.component';
import {SocioComponent} from './pages/cliente/socio/form/socio.component';
import {DiretorComponent} from './pages/diretor/form/diretor.component';
import {ItemComponent} from './pages/item/form/item.component';
import {LocacaoComponent} from './pages/locacao/form/locacao.component';
import {TituloComponent} from './pages/titulo/form/titulo.component';

const routes: Routes = [
  {path: 'titulos', component: TituloComponent},
  {path: 'atores', component: AtorComponent},
  {path: 'diretores', component: DiretorComponent},
  {path: 'classes', component: ClasseComponent},
  {path: 'itens', component: ItemComponent},
  {path: 'clientes', component: SocioComponent},
  {path: 'locacoes', component: LocacaoComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
