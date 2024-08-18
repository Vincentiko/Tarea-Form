import { Component } from '@angular/core';
import { GifService } from '../../service/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-homepages',
  templateUrl: './homepages.component.html',
  styleUrls: ['./homepages.component.scss'],
})
export class HomepagesComponent  {

  constructor(private gifsService: GifService) {
  }

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
