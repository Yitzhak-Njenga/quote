import { Component, OnInit } from '@angular/core';
import { Quote }from  '../quote'; 
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1, 'Don’t let the noise of others’ opinions drown out your own inner voice.', 'Author: Steve Jobs',new Date(2003,3,14)),
    new Quote(2, 'Be faithful in small things because it is in them that your strength lies', 'Author: Martha Teresa',new Date(1972,7,9)),
    new Quote(3, 'Success is determined not by whether or not you face obstacles, but by your reaction to them. ', 'Author: Dr. Ben carson',new Date(1987,0,12)),
    new Quote(4, 'Genius is one percent inspiration and ninety-nine percent perspiration', 'Author: By Thomas Edison',new Date(2019,6,18)),
   ];

  upVote(index) {

    
    this.quotes[index].upvote++;
  }
  downVote(index) {
    this.quotes[index].downvote++;
  }  

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      // this.quotes.splice(index,1);
      let toDelete = confirm(`Are you sure you want to delete this quote?`)
      if(toDelete){
        this.quotes.splice(index,1)
      }
    
    }
  }

  highestUpVote() {
    let highestUpVoteQuote = new Quote(0, '', '',new Date());
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].upvote > highestUpVoteQuote.upvote) {
        highestUpVoteQuote = this.quotes[i];
      }
    }
    if (highestUpVoteQuote.upvote > 0) {
      return highestUpVoteQuote;
    } else {
      return;
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
