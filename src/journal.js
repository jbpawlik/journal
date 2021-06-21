// Business Logic

// New Entry object 

export function Entry(title, body) {
  this.Title = title;
  this.Body = body;
}

// let entry1 = new Entry('title', 'body')
// let entry1 = ('title', 'body')
// entry1.body = text.concat('!')
// entry1.body = ['paragraph1', 'paragraph2']

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
