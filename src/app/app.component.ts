import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { SidebarComponent } from './includes/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticatePageComponent } from './auth/authenticate-page/authenticate-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet , 
    CommonModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HttpClientModule,
    AuthenticatePageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-sys';
}
