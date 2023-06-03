import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'starter-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  name: string = "";

  constructor(private route: ActivatedRoute, private router: Router){}


  ngOnInit(){
    this.name = this.route.snapshot.params['name']
  }
}
