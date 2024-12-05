import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-kj-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './kj-side-menu.component.html',
  styles: ``,
})
export class KjSideMenuComponent {
  public isAuthenticated = input(false);
  public title = input('KJ');
  public subtitle = input('CORP');

  public titleColor = input<TitleColor>(TitleColor.purple);

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  public onSignOut = output();
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  public onSignIn = output();
}
