import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/header/header.component';
import { FooterComponent } from './public/footer/footer.component';
import { AboutUsComponent } from './public/about-us/about-us.component';
import { ContactComponent } from './public/contact/contact.component';
import { PostService } from './post.service';
import { AdminModule } from './admin/admin.module';

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
    AdminModule
  ],
  exports: [AppRoutingModule],
  bootstrap: [AppComponent],
  providers: [PostService]
})
export class AppModule { }
