import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  users=[
    {id:1,name:'Amit'},
    {id:2,name:'Raj'},
    {id:3,name:'Chetan'},
    {id:4,name:'Vikas'},
  ]

}
