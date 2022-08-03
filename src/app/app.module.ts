import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/header/header.component';
import { FooterComponent } from './public/footer/footer.component';
import { AboutUsComponent } from './public/about-us/about-us.component';
import { ContactComponent } from './public/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { AdminModule } from './admin/admin.module';
// import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    // AdminModule,
    // AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
