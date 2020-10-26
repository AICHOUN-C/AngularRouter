import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    UserProfilComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
