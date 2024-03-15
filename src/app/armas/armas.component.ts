import { Component, OnInit } from '@angular/core'; // Agrega OnInit para implementar el ciclo de vida OnInit
import { ValorantWeaponsApiService } from '../service-weapons/valorant-weapons-api.service';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.css'] // Usa styleUrls en lugar de styleUrl
})
export class ArmasComponent implements OnInit { // Implementa OnInit
  data: any[] = [];

  constructor(private valorantWeaponsService: ValorantWeaponsApiService) { }

  ngOnInit(): void {
    this.valorantWeaponsService.getWeapons().subscribe(
      response => {
        if (Array.isArray(response.data)) { // Verificar si response.data es un array
          this.data = response.data;
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
