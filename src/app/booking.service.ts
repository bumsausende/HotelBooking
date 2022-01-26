import { Injectable } from '@angular/core';
import { Bookings } from './mock-bookings';
import { Booking } from './booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookingUrl: string = "/api/bookings";

  constructor(private httpClient: HttpClient) { }

  getBookings() : Observable<Booking[]>{
    var response = this.httpClient.get<Booking[]>(this.bookingUrl);
    return response;
  }
  deleteBooking(booking: Booking):void{
    var index = Bookings.indexOf(booking);
    Bookings.splice(index,1);
  }
  getBookingById(id: number) : Booking{
    var bookingById= Bookings.find(x => x.id == id)!;
    return bookingById;
  }
  addBooking(booking: Booking) : void{
    Bookings.push(booking);
  }
  updateBooking(booking: Booking) : void{
    var currentBooking = this.getBookingById(booking.id);
    currentBooking = booking;

  }
}
