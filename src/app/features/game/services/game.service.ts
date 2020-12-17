import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {
    console.log('servicio game funcionando');
  }

  /* getIdActiveUserData(): Observable<any> {
    const endpoint = 'http://localhost:8080/netflix/customer';

    return this.http.get(endpoint).pipe(
      map((response) => {
        return response;
      })
    );
  } */

  // Método para obtener todos los juegos
  saveGames(): Observable<any> {
    const endpoint = 'http://localhost:8080/equipod/games';

    return this.http.get(endpoint).pipe(
      map((response) => {
        return response;
      })
    );
  }

  // Método obtener un juego concreto
  searchGame(title: string): Observable<any> {
    const endpoint = `http://localhost:8080/equipod/games/${title}`;

    return this.http.get(endpoint).pipe(
      map((response) => {
        return response;
      })
    );
  }

  // deleteCustomer(idCustomer: number): Observable<any> {
  //   const endpoint = `http://localhost:8080/netflix/customer/${idCustomer}`;

  //   return this.http.delete<any>(endpoint, this.httpOptions);
  // }
}
