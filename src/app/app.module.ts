import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GestionProjetsComponent } from './gestion-projets/gestion-projets.component';
import { MDBBootstrapModule,NavbarModule, WavesModule, ButtonsModule,IconsModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchInputComponent } from './search-input/search-input.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionEquipesComponent } from './gestion-equipes/gestion-equipes.component';
import { MenuComponent } from './menu/menu.component';
import { BacklogComponent } from './backlog/backlog.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { KanbanComponent } from './kanban/kanban.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GestionProjetsComponent,
    ConfirmDialogComponent,
    SearchInputComponent,
    GestionEquipesComponent,
    MenuComponent,
    BacklogComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    KanbanComponent,
    ProfileComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule, 
    WavesModule, 
    ButtonsModule,
    IconsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
    MatCardModule,
    BrowserAnimationsModule,
    DragDropModule
    
 

  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],

})
export class AppModule { }
