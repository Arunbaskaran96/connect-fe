import {
  Component,
  input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-feed',
  imports: [],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent implements OnInit {
  // private readonly id = input();
  public id = input.required();

  ngOnInit(): void {
    console.log('clg--', this.id());
  }
}
