import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/service/gifs.service';

@Component({
  selector: 'app-shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent  {

  //private gifsService
  constructor(private gifsService: GifService){

  }
  get tags() {
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string):void {
    this.gifsService.searchTag(tag)
  }

}
