import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ActiveChatComponent } from './active-chat/active-chat.component';
import { DisplayMessageComponent } from './display-message/display-message.component';
import { PostMessageComponent } from './post-message/post-message.component';
import { HeadingImageComponent} from './heading-image/heading-image.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MessageService} from './services/message.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {UsersComponent} from './users/users.component';
import {UsersService} from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveChatComponent,
    DisplayMessageComponent,
    PostMessageComponent,
    HeadingImageComponent,
    SidebarComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MessageService,
  UsersService],
  bootstrap: [AppComponent]

})
export class AppModule { }
