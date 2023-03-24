import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { CardComponent } from '../components/card/card.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ModalComponent } from '../components/modal/modal.component';
import { BoardCardComponent } from '../components/board-card/board-card.component';
import { EmailConfirmationComponent } from '../pages/email-confirmation/email-confirmation.component';
import { ForgotPasswordComponent } from '../pages/forgot-password/forgot-password.component';
import { NotebookComponent } from '../components/notebook/notebook.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DashboardComponent,
    CardComponent,
    SidebarComponent,
    ModalComponent,
    BoardCardComponent,
    EmailConfirmationComponent,
    ForgotPasswordComponent,
    NotebookComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
