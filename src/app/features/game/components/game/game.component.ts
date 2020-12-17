import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/interfaces/user';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  activeUser: string;
  user: UserI;

  // variable que guarda los juegos registrados
  games: any[];

  // variable que guarda la búsqueda (input)
  busqueda = '';
  gamesActive = false;

  searchedGame: any;

  arr = Array;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.getActiveUser();
    this.getGames();
  }

  getActiveUser(): void {
    this.activeUser = sessionStorage.getItem('activeUser');
  }

  getGames(): void {
    this.gameService.saveGames().subscribe(
      (res) => {
        this.games = res;
        this.gamesActive = true;
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchGame(): void {
    this.gameService.searchGame(this.busqueda).subscribe(
      (res) => {
        console.log(res);
        this.gamesActive = false;
        this.searchedGame = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
