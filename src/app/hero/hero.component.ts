import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  title1: string = 'Самая вкусная пицца в мире';
  title2: string = 'только в Pizza Cheff';
}
