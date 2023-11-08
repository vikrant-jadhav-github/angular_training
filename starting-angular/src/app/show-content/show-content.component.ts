import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-show-content',
  templateUrl: './show-content.component.html',
  styleUrls: ['./show-content.component.css']
})
export class ShowContentComponent {
  @Input()
  data: any[] = []
  @Output()
  delete: any = new EventEmitter()
  onDelete(id: number): void{
    this.delete.emit(id)
  }
}
