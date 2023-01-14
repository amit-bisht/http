import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  id:number
  name:string
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.name=this.route.snapshot.queryParams['userName']
  }
}
