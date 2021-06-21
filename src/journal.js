// Business Logic

// New Entry object 

export function Entry(title, body) {
  this.Title = title;
  this.Body = body;
}

// let entry1 = new Entry('My first post', 'Hey everybody this is my new blog');

// let vowelNumber = 

Entry.prototype.numberOfWords = function() {
  let wordCount = 0;
  let text = this.Body;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}; 

Entry.prototype.countVowels = function() {
  let vowelCount = 0;
  let vowelMatch = vowel.match(/[AEIOUaeiou]/gi);
  
}



// Entry.prototype.numberOfVowels = function() {
//   let 

// }

// /[aieou]/gi