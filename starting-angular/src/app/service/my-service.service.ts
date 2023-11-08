import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  basedata: any[] = []

  constructor() {
    }

   insertData(data: any){
    this.basedata.push(data)
   }

   getData(){
    return this.basedata
   }

   deleteData(id: number){
    this.basedata.splice(id, 1)
   }
   
}
