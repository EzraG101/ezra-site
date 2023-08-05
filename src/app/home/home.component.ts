import { Component, ViewChild } from '@angular/core';
// import { MathjaxComponent } from '../mathjax/mathjax.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  //   @ViewChild(MathjaxComponent) childView: MathjaxComponent;

  //   name = 'Mathjax ';
  //   mathContent = `When $ a \\ne 0 $, there are two solutions to \\(ax^2 + bx + c = 0 \\) and they are
  // $$ x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$`;
  // height?: number | undefined;
  // onResize(event): void {
  //   console.log(event);
  // }
  ngOnInit() {
    // document.querySelector('.hide')?.setAttribute('hidden', 'false');
    // const firstTime = localStorage.getItem('key');
    // if (!firstTime) {
    //   localStorage.setItem('key', 'loaded');
    //   location.reload();
    // } else {
    //   localStorage.removeItem('key');
    // }
    // let card = document.querySelector('.card');
    // this.height = card?.clientHeight;
    // console.log(card);
    // console.log(this.height);
    // document.querySelector('.hide')?.setAttribute('hidden', 'true');
  }
}
