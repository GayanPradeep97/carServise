import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'carservice';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
  }

  switchLanguage(event: Event) {
    console.log('weda karanawa',event)
    const selectElement = event.target as HTMLSelectElement;
    const selectedLanguage = selectElement.value;
    console.log('selected value',selectElement.value)
    this.translate.use(selectedLanguage);
  }
}
