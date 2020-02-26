import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogComponent } from './pages/blog/blog.component';
import { TeamComponent } from './pages/team/team.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { MaterialFileInputModule } from 'ngx-material-file-input';
 
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainNavComponent,
    ContactUsComponent,
    BlogComponent,
    TeamComponent,
    AboutUsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatFileUploadModule,
    MaterialFileInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
