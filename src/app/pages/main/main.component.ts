import { Component } from '@angular/core';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-main',
  imports: [TopbarComponent, SidebarComponent, HomeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
