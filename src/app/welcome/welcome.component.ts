import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message : string = "welcome!"
  name = ''

  //ActivateRoute
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // gives a snapshot of the parameters which are parsed in
    this.name = this.route.snapshot.params['name']
  }


}
