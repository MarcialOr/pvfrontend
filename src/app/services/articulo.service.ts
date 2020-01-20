import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  apiUrl = 'https://localhost:5001/api/articulo';

  constructor(private http: HttpClient) { }

  getArticulo() {
    return this.http.get<Articulo[]>(this.apiUrl);
  }

  getArticuloById(id: number) {
    return this.http.get<Articulo>(this.apiUrl + '/' + id);
  }

  deleteArticulo(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createArticulo(articulo: Articulo) {
    return this.http.post<Articulo>(this.apiUrl, articulo);
  }

  editArticulo(articulo: Articulo) {
    return this.http.put<Articulo>(this.apiUrl + '/' + articulo.articuloid , articulo);
  }
}
