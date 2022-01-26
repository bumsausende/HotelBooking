import { Injectable } from '@angular/core'
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'
import { Observable } from 'rxjs'
import { Booking } from './booking'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService{
createDb() {
  const bookings: Booking[] = [
    {  
       id : 1,
       name: "Bums",
       roomNumber: 231,
       startDate:  new Date(),
       endDate: new Date("2022-03-21")
    },
    {  
       id : 2,
       name: "Günther",
       roomNumber: 312,
       startDate:  new Date("2022-04-21"),
       endDate: new Date("2022-04-23")
    },
    {  
       id : 3,
       name: "Frau Gans",
       roomNumber: 111,
       startDate:  new Date("2022-05-21"),
       endDate: new Date("2022-05-23")
    },
    {  
       id : 4,
       name: "Senior Jamon",
       roomNumber: 404,
       startDate:  new Date("2022-06-21"),
       endDate: new Date("2022-06-23")
    },
    {  
       id : 5,
       name: "Affe Janine",
       roomNumber: 607,
       startDate:  new Date("2022-07-21"),
       endDate: new Date("2022-08-21")
    }
]
return {bookings};
}
  constructor() { }
}
