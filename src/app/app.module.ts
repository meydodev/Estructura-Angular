import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';

import { MyComponentComponent } from './components/my-component/my-component.component';
import { RegisterComponent } from './auth/register/register.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MySecondComponentComponent } from './components/my-second-component/my-second-component.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyComponentComponent,
    RegisterComponent,
    FooterComponent,
    MySecondComponentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
