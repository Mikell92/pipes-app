import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { tick } from '@angular/core/testing';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  routes = routes.map((route) => ({
    tittle: route.title ?? '',
    path: route.path ?? '',
  }));
}
