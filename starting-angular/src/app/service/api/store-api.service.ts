import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreApiService {

  baseurl = "https://fakestoreapi.com"

  constructor(
    private http : HttpClient
  ) { }

  getProducts(limit: number = 5){
    const url = `${this.baseurl}/products?limit=${limit}`
    return this.http.get(url)
  } 

}
