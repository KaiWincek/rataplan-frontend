import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentRequestFormComponent } from './appointment/appointment-request-form/appointment-request-form.component';
import { DateOverviewSubformComponent } from './appointment/appointment-request-form/date-overview-subform/date-overview-subform.component';
import { DatepickerSubformComponent } from './appointment/appointment-request-form/datepicker-subform/datepicker-subform.component';
import { EmailSubformComponent } from './appointment/appointment-request-form/email-subform/email-subform.component';
import { GeneralSubformComponent } from './appointment/appointment-request-form/general-subform/general-subform.component';
import { LinkSubformComponent } from './appointment/appointment-request-form/link-subform/link-subform.component';
import { AppointmentRequestAuthGuard } from './appointment/auth-guard/appointment-request-auth-guard.service';
import { ConditionsComponent } from './legals/conditions/conditions.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ImprintComponent } from './legals/imprint/imprint.component';
import { PrivacyComponent } from './legals/privacy/privacy.component';
import { ContactComponent } from './legals/contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'create-appointment', component: AppointmentRequestFormComponent,
    children: [
      { path: '', redirectTo: 'general', pathMatch: 'full' },
      { path: 'general', component: GeneralSubformComponent },
      { path: 'datepicker', component: DatepickerSubformComponent, canActivate: [AppointmentRequestAuthGuard] },
      { path: 'overview', component: DateOverviewSubformComponent, canActivate: [AppointmentRequestAuthGuard] },
      { path: 'email', component: EmailSubformComponent, canActivate: [AppointmentRequestAuthGuard] },
      { path: 'links', component: LinkSubformComponent, canActivate: [AppointmentRequestAuthGuard] },
      { path: '**', redirectTo: 'general', pathMatch: 'full' },
    ],
  },
  { path: 'terms-and-conditions', component: ConditionsComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
