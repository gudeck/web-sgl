import {Component, OnInit} from '@angular/core';
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

  public novoItem: Item;
  public itemSelecionado: Item;

  public br: any;

  constructor(
    private itemService: ItemService,
    private tipoItemService: TipoItemService,
    private tituloService: TituloService
  ) {
  }

  ngOnInit(): void {
    this.itemService.getAll().subscribe(value => this.itens = value);
    this.tipoItemService.getAll().subscribe(value => this.tiposItem = value);
    this.tituloService.getAll().subscribe(value => this.titulos = value);

    this.novoItem = new Item();

    this.br = {
      firstDayOfWeek: 1,
      dayNames: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
      dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      monthNames: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
      monthNamesShort: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
      today: 'Hoje',
      clear: 'Limpar'
    };
  }

  delete(itemSelecionado: Item) {
    this.itemService.delete(itemSelecionado.id).subscribe(() => {
      this.itens = this.itens.filter(value => value.id !== itemSelecionado.id);
      this.itemSelecionado = null;
    });
  }

  post(novoItem: Item) {
    this.itemService.post(novoItem).subscribe(value => {
      this.itens.push(value);
      this.novoItem = new Item();
    });
  }

  isOneSelected(): boolean {
    return Boolean(this.itemSelecionado);
  }

  setFocus() {
    document.getElementById('inputNome').focus();
  }


}