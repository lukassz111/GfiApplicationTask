import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-switch-lang',
  templateUrl: './switch-lang.component.html',
  styleUrls: ['./switch-lang.component.css']
})
export class SwitchLangComponent implements OnInit {

  constructor(
    private translate: TranslateService
  ) { }

  public lang: string;

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit() {
    this.lang = this.translate.currentLang;
    this.translate.onLangChange.subscribe(o => {
      this.lang = this.translate.currentLang;
    });
  }

}
