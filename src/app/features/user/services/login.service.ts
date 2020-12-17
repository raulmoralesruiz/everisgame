import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserI } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {
    console.log('servicio login funcionando');
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // Método para obtener usuarios
  saveRegisteredUsers(): Observable<any> {
    const endpoint = 'http://localhost:8080/equipod/user';

    return this.http.get(endpoint).pipe(
      map((response) => {
        return response;
      })
    );
  }

  // Método para crear usuario, realizando POST
  createUser(user: UserI): Observable<UserI> {
    const endpoint = 'http://localhost:8080/equipod/user';

    return this.http.post<UserI>(endpoint, user, this.httpOptions);
  }
}
