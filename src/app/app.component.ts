import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = signal('experimental');
  changeTitleTo(newTitle: string) {
    this.title.set(newTitle);
  }

  appendExclamation() {
    this.title.update(currentTitle => currentTitle + '!');
  }
}
