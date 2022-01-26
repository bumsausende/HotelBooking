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
  deleteBooking(booking: Booking): Observable<Booking>{
    var response = this.httpClient.delete<Booking>(this.bookingUrl+"/"+booking.id)
    /*this is now task of server
    var index = Bookings.indexOf(booking);
    Bookings.splice(index,1);*/
    return response;
  }
  getBookingById(id: number) : Observable<Booking>{
    var response = this.httpClient.get<Booking>(this.bookingUrl+"/"+id)

    /* now server's task
    var bookingById= Bookings.find(x => x.id == id)!;
    return bookingById;*/
    return response;
  }
  addBooking(booking: Booking) : void{
    Bookings.push(booking);
  }
  updateBooking(booking: Booking) : void{
    var currentBooking = this.getBookingById(booking.id);
    currentBooking = booking;

  }
}
