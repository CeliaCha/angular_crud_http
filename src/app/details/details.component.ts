import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  user$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => this.user$ = params.id ) ;
   }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(data => this.user$ = data)
  }

  add(name, email) {
    console.log(name, email);
    let newUser = {
      "name" : name,
      "email" : email,
      "password" : "fake1111"
    }
    this.data.addUser(newUser);
  }
  update(name, email) {
    console.log(name, email);
    let newUser = {
      "name" : name,
      "email" : email,
      "password" : "fake1111"
    }
    this.data.updateUser(6, newUser);
  }
  delete() {
    this.data.deleteUser(6);
  }

}
