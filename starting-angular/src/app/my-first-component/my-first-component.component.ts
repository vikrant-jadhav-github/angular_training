import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent {
  
  name: string = ""
  title: string = ""
  message: string = ""

  data: any[] = []

  isSubmit = false
  
  constructor(
    private myService: MyServiceService
  ){
    this.data = myService.getData()
    this.isSubmit = true
    console.log("HELLO")
  }

  onSubmit(): void {
    this.isSubmit = true
    this.myService.insertData({name : this.name, title : this.title, message : this.message})
  }

  onDelete(id: number): void {
    this.data.splice(id, 1)
  }

}
