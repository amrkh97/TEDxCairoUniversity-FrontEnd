import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import{BlogComponent}from './pages/blog/blog.component'
import { TeamComponent } from './pages/team/team.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [
  { path: 'contact', component: ContactUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'team', component: TeamComponent },
  { path: 'about-us', component: AboutUsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
