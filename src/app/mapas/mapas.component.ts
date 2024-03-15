import { Component } from '@angular/core';
import { ValorantMapApiService } from '../service-map/valorant-map-api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrl: './mapas.component.css'
})
export class MapasComponent {
  data: any[] = [];

  images: string[] = []; // Ejemplo de URLs de imágenes
  currentImageIndex = 0;
  currentImage: string;
  index: number = 0;

  constructor(private valorantMapApiService: ValorantMapApiService) { 
    this.currentImage = this.images[this.currentImageIndex];
  }

  ngOnInit(): void {
  // Obtener los datos de la API
  this.valorantMapApiService.getMap().subscribe(
    response => {
      if (Array.isArray(response.data)) {
        this.data = response.data;
        console.log(this.data);
        // Buscar el splash y agregarlo a las imágenes
        const maps = response.data;
        for (const map of maps) {
          if (map.hasOwnProperty('splash')) {
            this.images.push(map.splash); // Agrega la URL de splash al arreglo
            console.log('Splash URL:', map.splash);
          }
        }
        console.log(this.images);

        // Inicializa currentImage con la primera imagen después de obtener todas las imágenes
        if (this.images.length > 0) {
          this.currentImage = this.images[0];
        } else {
          console.error('Error: No images found');
        }

        this.startCarousel(); // Inicia el carrusel después de obtener las imágenes

      } else {
        console.error('Error: Response data is not an array');
      }
    },
    error => {
      console.error('Error fetching maps:', error);
    }
  );
}

  startCarousel(): void {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentImageIndex];
    }, 5000); // Cambiar de imagen cada 5 segundos
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.currentImage = this.images[this.currentImageIndex];
}

nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentImageIndex];
}

}