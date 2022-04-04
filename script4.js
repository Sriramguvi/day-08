class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating="PG";
    }

gettitlename(){
    return `title:${this.title} studio: ${this.studio} rating: ${this.rating}`;
      
    }
}
var rat=new Movie;
var s1=new Movie("Casino Royale","Eon Productions","PG13");
console.log(s1.gettitlename());

