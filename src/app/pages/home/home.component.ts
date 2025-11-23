import { Component } from '@angular/core';
import { PostComponent } from '../../components/post/post.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [PostComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
