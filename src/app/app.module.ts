import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { InMemoryDataServiceService } from './in-memory-data-service.service';
import { EventSignupComponent } from './event-signup/event-signup.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, BookingsComponent, CreateBookingComponent, EventSignupComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataServiceService, /*{dataEncapsulation:true}*/), ReactiveFormsModule], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
