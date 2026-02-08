import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "I love you Mouniiiiii!!!!";
  yesScale = 1;
  noLeft = 250;
  noTop = 105;
  saidYes = false;

  onYes() {
    this.title = "I knew you'd say yes! I love you! 💍";
    this.saidYes = true;
    // You could trigger a confetti explosion here!
  }

  moveNoButton() {
    this.noLeft = Math.random() * (window.innerWidth - 100-250);
    this.noTop = Math.random() * (window.innerHeight - 100-105);
    this.yesScale += 0.2; // Make the Yes button bigger every time she tries to click No
  }
}
