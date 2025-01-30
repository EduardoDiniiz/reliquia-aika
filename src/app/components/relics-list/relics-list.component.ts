import { Component, OnInit } from '@angular/core';
import { RelicsService } from '../../services/relics.service';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

interface Relic {
  by_nation: number;
  devir: number;
  relic: string;
  char_name: string;
  char_level: number;
  guild_name: string;
  relic_date: string;
}

@Component({
  standalone: true,
  selector: 'app-relics-list',
  imports: [CommonModule],
  templateUrl: './relics-list.component.html',  
  styleUrls: ['./relics-list.component.css']
})
export class RelicsListComponent implements OnInit {
  relics: Relic[] = [];

  constructor(private relicsService: RelicsService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.relicsService.getRelics().subscribe(data => {
      this.relics = data;
    });
  }

  obterNacao(nacao: Number) {
    if(nacao === 1)
      return 'Eridanos';
    if(nacao === 2)
      return 'Octans';
    if(nacao === 3)
      return 'Volans';
    if(nacao === 4)
      return 'Auriga';
    if(nacao === 5)
      return 'Crux';
    else
    return '';
 }

 obterDevir(nacao: Number) {
  if(nacao === 0)
    return 'Amarkand';
  if(nacao === 1)
    return 'Sigmund';
  if(nacao === 2)
    return 'Cahill';
  if(nacao === 3)
    return 'Mirza';
  else
    return '';
}

formatarData(data: string) {
  return this.datePipe.transform(data, 'yyyy/MM/dd HH:mm');
}
}
