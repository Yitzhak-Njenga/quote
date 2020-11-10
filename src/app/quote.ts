export class Quote {
    // id:number;
    // quoteName:string;
    // description:string;
    upvote: number;
  downvote: number;
  // author: string;

    public showDescription: boolean;
    constructor(public id: number,public quoteName: string,public description: string,public completeDate: Date){
        this.showDescription=false;
        this.upvote = 0;
        this.downvote = 0;
        // this.author = author
        
    }
}
