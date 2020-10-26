import { Routes } from '@angular/router';
import { UserProfilComponent } from "./user-profil/user-profil.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const ROUTES: Routes = [
  { path: 'app-sign-up', component: SignUpComponent },
  { path: 'app-user-profil', component: UserProfilComponent },
  { path: '', component: UserProfilComponent }
];

export { ROUTES };