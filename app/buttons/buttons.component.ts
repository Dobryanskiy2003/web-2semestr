import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  constructor(private dataService: DataService){}

  add():void{
    this.dataService.addData()
  }

  delete():void{
    this.dataService.deleteData()
  }
}
