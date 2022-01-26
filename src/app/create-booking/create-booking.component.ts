import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private BookingService: BookingService
  ) {}

  booking: Booking = {
    id: 100,
    name: 'your name',
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date(),
  };

  ngOnInit(): void {
    if (this.router.url != '/createBooking') {
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.BookingService.getBookingById(id).subscribe((result) => {
        this.booking = result;
      });
      /*referrring to service
      var bookingById = Bookings.find((x) => x.id == id)!;*/
    }
  }
  save(): void {
    //even POST this.BookingService.getBookingById(this.booking.id).subscribe();
    /*
    var bookingById = Bookings.find((x) => x.id == this.booking.id);*/
    //if (bookingById == null || bookingById == undefined) {
    this.BookingService.addBooking(this.booking).subscribe();
    /*.push is a upcoming service method too
      Bookings.push(this.booking);*/
    this.router.navigate(['bookings']);
  }
  // POST does update anywayelse { this.BookingService.updateBooking(this.booking);
  /* update method incoming
      bookingById = this.booking;*/

  dateChanged(event: Event, isStart: boolean) {
    var value = (event.target as HTMLInputElement).value;
    if (isStart) {
      this.booking.startDate = new Date(value);
    } else {
      this.booking.endDate = new Date(value);
    }
  }
}
