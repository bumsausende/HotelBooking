import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {
  //dependancy injection resp service implemented in constructor//
  constructor(private bookingService: BookingService) {}

  bookings: Booking[] = [];

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe((result) => {
      this.bookings = result;
    });
  }
  deleteBooking(booking: Booking): void {
    this.bookingService.deleteBooking(booking).subscribe();
    //frontend
    this.bookings = this.bookings.filter(b => b != booking);

    /*method is coded in bookingService, here's just referring/
    var index = Bookings.indexOf(booking);
this.bookings.splice(index,1);*/
  }
}
