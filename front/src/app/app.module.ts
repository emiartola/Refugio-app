import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DogFormComponent } from './components/dog-form/dog-form.component';
import { DogListComponent } from './components/dog-list/dog-list.component';

import { DogsService } from './services/dogs.service'


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DogFormComponent,
    DogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
