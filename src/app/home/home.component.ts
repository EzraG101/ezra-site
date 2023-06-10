import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  height?: number | undefined;
  // onResize(event): void {
  //   console.log(event);
  // }
  ngOnInit() {
    let card = document.querySelector('.card');
    this.height = card?.clientHeight;

    console.log(card);
    console.log(this.height);

    document.querySelector('.hide')?.setAttribute('hidden', 'true');
  }
}
