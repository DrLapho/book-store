import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomepageComponent, AddBookComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
