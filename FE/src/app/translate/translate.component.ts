import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html'
})
export class TranslateComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

}
