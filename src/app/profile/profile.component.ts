import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from '../service/service-auth.service';
import { NgIf } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf, NavComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: any;
  private headers: HttpHeaders;

  constructor(private authService: ServiceAuthService) {}

  ngOnInit(): void {
      this.authService.getUser(localStorage["user_email"]).subscribe(user => {
       // console.log(user)
      this.user = user;
    });
  }

}
