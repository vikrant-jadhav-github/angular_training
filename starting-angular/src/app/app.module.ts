import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { FormsModule } from '@angular/forms';
import { ShowContentComponent } from './show-content/show-content.component';
import { AboutComponent } from './about/about.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    ShowContentComponent,
    AboutComponent,
    ShowDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
