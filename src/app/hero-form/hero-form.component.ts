import { Component, OnInit } from '@angular/core';
import { Heron } from '../heron';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];

  model = new Heron(18, 'Gebeya', this.powers[0], 'Anything');

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Heron(42, '', '');
  }

}
