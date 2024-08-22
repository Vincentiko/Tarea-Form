import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepagesComponent } from '../pages/homepages/homepages.component';
import { SearchBoxComponent } from '../components/search-box/search-box.component';
import { CardListComponent } from '../components/card-list/card-list.component';
import { CardComponent } from '../components/card/card.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    HomepagesComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomepagesComponent
  ]
})
export class GifsModule { }
