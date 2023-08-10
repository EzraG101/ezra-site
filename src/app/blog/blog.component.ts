import { Component, ViewChild } from '@angular/core';
import { MathjaxComponent } from '../mathjax/mathjax.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  @ViewChild(MathjaxComponent) childView: MathjaxComponent;
  name = 'Mathjax ';
  blogs = [
    {
      content: `Test 1: $\\frac{1}{2}+\\frac{1}{3}=\\frac{5}{6}$.`,
      date: '09/08/2023',
    },
    {
      content: `Test 2: $1+1=2$.`,
      date: '09/08/2023',
    },
  ];
  //   mathContent = `When $ a \\ne 0 $, there are two solutions to \\(ax^2 + bx + c = 0 \\) and they are
  // $$ x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$`;
}
