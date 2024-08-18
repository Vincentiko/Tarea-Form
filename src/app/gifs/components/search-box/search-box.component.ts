import { Component, ViewChild, ElementRef} from '@angular/core';
import { GifService } from '../../service/gifs.service';

@Component({
  selector: 'app-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar gifs."
      (keyup.enter)="searchTag()"
      #txtTagInput
    >
    <hr>
  `,
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent{
  @ViewChild('txtTagInput') //Esto sirve para tener una referencia local, es decir, al HTML
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifService){}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag)

    this.tagInput.nativeElement.value;
  }


}
