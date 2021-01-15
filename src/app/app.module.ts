import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    TopbarComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ServicesComponent,
    DepartmentsComponent,
    DoctorsComponent,
    ContactsComponent,
    AppointmentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'departments', component: DepartmentsComponent },
      { path: 'doctors', component: DoctorsComponent },
      { path: 'services', component: ServicesComponent }
      // { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
