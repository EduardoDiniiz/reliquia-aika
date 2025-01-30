import { Component, OnInit } from '@angular/core';
import { RelicsService } from '../../services/relics.service';

interface Relic {
  relic: string;
  char_name: string;
  char_level: number;
  guild_name: string;
  relic_date: string;
}

@Component({
  selector: 'app-relics-list',
  templateUrl: './relics-list.component.html',  
  styleUrls: ['./relics-list.component.css']
})
export class RelicsListComponent implements OnInit {
  relics: Relic[] = [];

  constructor(private relicsService: RelicsService) {}

  ngOnInit() {
    this.relicsService.getRelics().subscribe(data => {
      this.relics = data;
    });
  }
}
