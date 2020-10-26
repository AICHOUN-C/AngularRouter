import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  hidden = false

  displayAge() {
    if (this.hidden){
      document.getElementById("age").hidden = false;
      this.hidden = false;
    }
    else {
      document.getElementById("age").hidden = true;
      this.hidden = true;
    }  
  }

  ngOnInit(): void {
  }

}
