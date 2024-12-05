import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KjSideMenuComponent, TitleColor } from 'kj-side-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KjSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'kj-testbed-app';

  TitleColor = TitleColor;
  isAuthenticated = signal(true);
}
