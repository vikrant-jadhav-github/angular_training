import { Component } from '@angular/core';
import { StoreApiService } from '../service/api/store-api.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent {

  data : any = []

  constructor(
    private service : StoreApiService
  ){
    this.service.getProducts().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }


}
