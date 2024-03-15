import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValorantWeaponsApiService } from '../service-weapons/valorant-weapons-api.service'; // Importa el servicio para obtener los datos del arma

@Component({
  selector: 'app-detalle-arma',
  templateUrl: './detalle-arma.component.html',
  styleUrls: ['./detalle-arma.component.css']
})
export class DetalleArmaComponent implements OnInit {
  weaponUuid: string; // Declaración de la propiedad weaponUuid
  arma: any; // Declaración de la variable 'arma'

  constructor(private route: ActivatedRoute, private valorantWeaponsApiService: ValorantWeaponsApiService) { 
    this.weaponUuid = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params && params['id']) {
        this.weaponUuid = params['id']; // Recuperar el UUID de la ruta
        this.valorantWeaponsApiService.getWeaponById(this.weaponUuid).subscribe(weapon => {
          // Hacer algo con los detalles de la arma obtenidos
        this.arma = weapon; // Asignación de los datos del arma a la variable 'arma'
        console.log(this.arma);
        });
        console.log(this.valorantWeaponsApiService.getWeaponById);
      } else {
        console.log('UUID no encontrado en los parámetros de la ruta');

      }
    });
  }

  // ngOnInit() {
  //   const weaponId: string | null = 'weapon.uuid'; // O null si no tienes el ID
  //   if (weaponId !== null) {
  //     this.valorantWeaponsApiService.getWeaponById(weaponId).subscribe(weapon => {
  //       console.log(weapon);
  //     });
  //   } else {
  //     console.log('ID de arma no proporcionado');
  //   }
  // }
}
