import { Component, OnInit } from '@angular/core';
import BookingService from "../services/booking-service";
import {Booking} from "../models/booking";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.sass']
})

export class BookingComponent implements OnInit {
  constructor( private _bookingService:BookingService) { }

  bookings: Booking[] = [];
  ngOnInit(): void {
    this._bookingService.getAll().subscribe({
      next: (bookings) => {
        this.bookings = bookings;
        console.log(bookings);
      },
      error: (err) => (console.log(err)),
    });
  }
}
