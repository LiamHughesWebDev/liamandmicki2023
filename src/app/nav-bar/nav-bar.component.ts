import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menuOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showMenu(){
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen);
  }
}
