import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  items: MenuItem[];
  visibleSidebar1 = true;


  nomeFuncionario = 'Julio';

  constructor() {
  }

  ngOnInit(): void {
    this.items = [{
      label: 'Cadastro',
      items: [
        {label: 'New', icon: 'pi pi-fw pi-plus'},
        {label: 'Download', icon: 'pi pi-fw pi-download'}
      ]
    }];
  }

}
