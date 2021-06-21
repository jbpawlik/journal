import '../css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

// Business Logic

// New Entry object 

function Entry(title, body) {
  this.Title = title
  this.Body = body
}

let entry1 = new Entry('My first post', 'Hey everybody this is my new blog')

Entry.prototype.numberOfWords = function() {
  let wordCount = 0;
  let text = this.Body;

  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount
  } 
  entry1.numberOfWords()


//User Interface Logic

let text = $("#wordcounter").val();