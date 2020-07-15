import {Component, OnInit} from '@angular/core';
import {ConstantService} from '../../../service/constant.service';
import {Titulo} from '../../titulo/model/titulo';
import {TituloService} from '../../titulo/service/titulo.service';
import {Item} from '../model/item';
import {TipoItem} from '../model/tipo-item';
import {ItemService} from '../service/item.service';
import {TipoItemService} from '../service/tipo-item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public itens: Item[];
  public tiposItem: TipoItem[];
  public titulos: Titulo[];

  public titulosFiltrados: Titulo[];

  public novoItem: Item;
  public itemSelecionado: Item;

  public br: any;
  public loading: boolean;

  constructor(
    private constantService: ConstantService,
    private itemService: ItemService,
    private tipoItemService: TipoItemService,
    private tituloService: TituloService
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.itemService.getAll().subscribe(itens => {
      this.itens = itens;
      this.loading = false;
    });
    this.tipoItemService.getAll().subscribe(tiposItem => this.tiposItem = tiposItem);
    this.tituloService.getAll().subscribe(titulos => this.titulos = titulos);

    this.itens = [];
    this.initialize();

    this.br = this.constantService.br;
  }

  delete(itemSelecionado: Item) {
    this.loading = true;
    this.itemService.delete(itemSelecionado.id).subscribe(() => {
      this.itens = this.itens.filter(item => item.id !== itemSelecionado.id);
      this.loading = false;
      this.cleanSelection();
    });
  }

  post(novoItem: Item) {
    this.loading = true;
    this.itemService.post(novoItem).subscribe(itemRegistrado => {
      this.itens.push(itemRegistrado);
      this.loading = false;
      this.initialize();
    });
  }

  isOneSelected(): boolean {
    return Boolean(this.itemSelecionado);
  }

  setFocus() {
    document.getElementById('inputNome').focus();
    this.cleanSelection();
  }

  cleanSelection() {
    this.itemSelecionado = null;
  }

  initialize() {
    this.novoItem = new Item();
  }


  public filtrarTitulos(event) {
    this.titulosFiltrados = [];
    this.titulos.forEach(titulo => {
      if (titulo.nome.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.titulosFiltrados.push(titulo);
      }
    });
  }

}
