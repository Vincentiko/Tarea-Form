import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepagesComponent } from '../pages/homepages/homepages.component';
import { SearchBoxComponent } from '../components/search-box/search-box.component';
import { CardListComponent } from '../components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomepagesComponent,
    SearchBoxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomepagesComponent
  ]
})
export class GifsModule { }
