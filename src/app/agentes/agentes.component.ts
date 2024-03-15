import { Component, OnInit } from '@angular/core';
import { ValorantApiService } from '../service/valorant-api.service';

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrl: './agentes.component.css'
})
export class AgentesComponent {
  data: any[] = [];

  constructor(private valorantApiService: ValorantApiService) { }

  ngOnInit(): void {
    this.valorantApiService.getAgents().subscribe(
      response => {
        if (Array.isArray(response.data)) { // Verificar si response.data es un array
          this.data = response.data.filter((agent: any) => agent.isPlayableCharacter === true);
          console.log(this.data);
        } else {
          console.error('Error: Response data is not an array');
        }
      },
      error => {
        console.error('Error fetching agents:', error);
      }
    );
  }
}
