import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CorsoDetailComponent } from './corso-detail/corso-detail.component';
import { NewsComponent } from './news/news.component';
import { ContattiComponent } from './contatti/contatti.component';
import { LoginComponent } from './login/login.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CorsoDetailComponent,
    NewsComponent,
    ContattiComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
