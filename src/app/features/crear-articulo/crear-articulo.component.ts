import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {

  articulo: Articulo;
  id: number;
  nombre: string;
  precio: number;
  ubicacion: string;

  constructor(private articuloService: ArticuloService, private router: Router) {
   }

  ngOnInit() {
  }

  crearArticulo() {
      this.articulo = new Articulo();
      this.articulo.articuloid = this.id;
      this.articulo.nombre = this.nombre;
      this.articulo.precio = this.precio;
      this.articulo.ubicacion = this.ubicacion;
      this.articuloService.createArticulo(this.articulo).subscribe( () => {
        console.log(this.articulo);
        this.router.navigate(['/articulos']);
      });
  }

  cancelar() {
    this.router.navigate(['/articulos']);
  }


}
