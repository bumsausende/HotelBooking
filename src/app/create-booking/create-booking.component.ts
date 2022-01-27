import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private BookingService: BookingService,
    private formBuilder: FormBuilder,
  ) {}
//direct binding per ngModel- needed for validation?
  booking: Booking = {
    id: 100,
    name: 'your name',
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date(),
  };

  bookingForm = this.formBuilder.group({
    id:['', Validators.required],
    name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    roomNumber: ['', Validators.required],
    startDate:['', Validators.required],
    endDate: ['', Validators.required]
  })
  ngOnInit(): void {
    if (this.router.url != '/createBooking') {
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.BookingService.getBookingById(id).subscribe((result) => {
        this.booking = result;
        this.bookingForm.setValue(
          {
            id: this.booking.id,
            roomNumber: this.booking.roomNumber,
            name: this.booking.name,
            startDate:this.booking.startDate,
            endDate: this.booking.endDate,
          }
        )
      });
      /*referrring to service
      var bookingById = Bookings.find((x) => x.id == id)!;*/
    }
  }
  save(): void {
    // adjust new template bookingForm to save method
    this.booking.id = this.bookingForm.get('id')?.value;
    this.booking.name = this.bookingForm.get('name')?.value;
    this.booking.roomNumber = this.bookingForm.get('roomNumber')?.value;
    this.booking.startDate = this.bookingForm.get('startDate')?.value;
    this.booking.endDate = this.bookingForm.get('endDate')?.value;

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
