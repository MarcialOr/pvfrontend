import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  articulos: Articulo[];

  constructor(private articuloService: ArticuloService, private router: Router) { }

  ngOnInit() {
    this.obtenerArticulo();
  }

  obtenerArticulo() {
    this.articuloService.getArticulo().subscribe(data => {
      this.articulos = data;
      console.log(data);
    });
  }

  eliminarArticulo(id: number) {
    const res = confirm('Desea eliminar articulo?');
    this.articuloService.deleteArticulo(id).subscribe(() => {
      this.obtenerArticulo();
    });
  }

  crearArticulo() {
    this.router.navigate(['/crear-articulo']);
  }

  editarArticulo(id: number) {
    this.router.navigate(['/editar-articulo', id]);
  }
}
