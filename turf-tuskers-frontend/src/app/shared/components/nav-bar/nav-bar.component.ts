import { Component } from '@angular/core';
import { sharedImports } from '../../shared-imports';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavbarComponent {}