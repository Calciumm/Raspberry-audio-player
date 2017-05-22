import {Component, OnInit} from '@angular/core';
import { PlayerService } from './player.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = '';

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.testService().then(result => this.title = result);
  }
}
