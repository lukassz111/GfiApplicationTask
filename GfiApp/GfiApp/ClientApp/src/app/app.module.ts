import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

import { AppComponent } from './app.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersTableRowComponent } from './components/users-table-row/users-table-row.component';
import { UserService } from './service/user.service';
import { UserEditFormComponent } from './components/user-edit-form/user-edit-form.component';
import { FormValidInfoComponent } from './components/form-valid-info/form-valid-info.component';
import { SwitchLangComponent } from './components/switch-lang/switch-lang.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    UsersTableRowComponent,
    UserEditFormComponent,
    FormValidInfoComponent,
    SwitchLangComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,

    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
