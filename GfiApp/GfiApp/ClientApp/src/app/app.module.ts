import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersTableRowComponent } from './components/users-table-row/users-table-row.component';
import { UserService } from './service/user.service';
import { UserEditFormComponent } from './components/user-edit-form/user-edit-form.component';
import { FormValidInfoComponent } from './components/form-valid-info/form-valid-info.component';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    UsersTableComponent,
    UsersTableRowComponent,
    UserEditFormComponent,
    FormValidInfoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),

    NgbModule.forRoot()

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }