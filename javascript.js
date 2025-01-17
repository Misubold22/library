function Book(title, author, pages, read, comment) {
  this.title = title;
  this.author = author;
  this.pages = pages; // Pass the number directly
  this.read = read;
  this.comment = comment;

  this.info = function () {
    // Return the formatted string
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}, ${this.comment}`;
  };
}

Book.prototype.Read = function () {
  this.read = 'Read';
  console.log(`${this.title} status updated to "Read".`);
  console.log(myLibrary)
};


const theManWithoutQualities = new Book(
  'The Man Without Qualities',
  'Robert Musil',
  1774,
  'Not Read',
  'The plan is to buy it and read it this year. I hope I can stick to it, and I wonder how long it will take me to finish reading it.'
);

const theLayOfTheLand = new Book(
  'The Lay of the Land',
  'Richard Ford',
  485,
  'Not Read',
  'It`s soon on my list since I`ve read other works by Richard Ford and really like his writing'
);

const acrossTheRiverAndIntoTheTrees = new Book(
  'Across The River',
  'Ernest Hemingway',220,'Not Read',
  'Although I`ve read many other works by Hemingway, this one is very tedious and boring, and the dialogue is too cringy. Or maybe it`s the story itself, which sounds interesting only on paper. I hate the way the colonel and his so-called `daughter` talk. For me, it`s the worst book by Hemingway so far.'
);

const capitalAndIdeology= new Book(
  'Capital and Ideology',
  'Thomas Piketty',
  1150,
  'Read',
  'In this one,Piketty challenges us to revolutionize how we think about politics, ideology, and history. He exposes the ideas that have sustained inequality for the past millennium, reveals why the shallow politics of right and left are failing us today, and outlines the structure of a fairer economic system.'
);

const myLibrary = [theLayOfTheLand ,theManWithoutQualities,acrossTheRiverAndIntoTheTrees,capitalAndIdeology ];

function showLibrary() {
  const cardContainer = document.querySelector('.library-shelves');
  for (let i = 0; i < myLibrary.length; i++) {
    const AddedCard = createCard(
      myLibrary[i].title,
      myLibrary[i].pages,
      myLibrary[i].author,
      myLibrary[i].read,
      myLibrary[i].comment
    );
    cardContainer.appendChild(AddedCard);
    const btn = document.createElement('button');
    btn.setAttribute('class', 'delete-btn');
    const img = document.createElement('img');
    img.setAttribute('class', 'pages-image');
    img.src ="./images/pages.png"
    AddedCard.appendChild(img);
    AddedCard.appendChild(btn);
  }
}

document.addEventListener(
  'DOMContentLoaded',
  function () {
    showLibrary();
    console.log(myLibrary);
  },
  false
);


function togglePopup() {
  const popup = document.getElementById('popupOverlay');
  popup.classList.toggle('show');
}

function addBookToLibrary() {
  document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.library-shelves');
    const form = document.querySelector('.form-container');
    form.addEventListener('submit', event => {
      event.preventDefault();

      const NewTitle = form.elements['title'];
      const NewAuthor = form.elements['author'];
      const NoPages = form.elements['pages'];
      const NewRead = form.elements['read'];
      const NewComment = form.elements['comment'];

      let author = NewAuthor.value;
      let title = NewTitle.value;
      let pages = NoPages.value;
      let read = NewRead.value;
      let comment = NewComment.value;
      const bookToAdd = new Book(title, author, pages, read, comment);

      console.log(bookToAdd);
      console.log(myLibrary);

      const NewCard = createCard(
        bookToAdd.title,
        bookToAdd.pages,
        bookToAdd.author,
        bookToAdd.read,
        bookToAdd.comment
      );
      cardContainer.appendChild(NewCard);
      const btn = document.createElement('button');
      btn.setAttribute('class', 'delete-btn');
      const img = document.createElement("img");
      img.src ="./images/pages.png"
      img.setAttribute('class', 'pages-image');
      NewCard.appendChild(btn);
      NewCard.appendChild(img);

      myLibrary.push(bookToAdd);
      return myLibrary;
    });
  });
}
addBookToLibrary();