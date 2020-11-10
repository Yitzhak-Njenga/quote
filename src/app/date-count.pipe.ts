import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any, argS? :any): any {
    let today:Date = new Date(); // get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime)
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
    var dateCounter = dateDifferenceSeconds/secondsInDay;
    
    if (dateCounter >= 1 && value < todayWithNoTime ){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
