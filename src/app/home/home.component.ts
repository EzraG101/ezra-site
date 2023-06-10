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
    // document.querySelector('.hide')?.setAttribute('hidden', 'false');
    const firstTime = localStorage.getItem('key');
    if (!firstTime) {
      localStorage.setItem('key', 'loaded');
      location.reload();
    } else {
      localStorage.removeItem('key');
    }

    let card = document.querySelector('.card');
    this.height = card?.clientHeight;

    console.log(card);
    console.log(this.height);

    document.querySelector('.hide')?.setAttribute('hidden', 'true');
  }
}
