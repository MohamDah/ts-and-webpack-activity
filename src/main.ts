// --- TypeScript Code ---

// Task 2: Book class
class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

// Task 1: Function to display book information with type annotations
function displayBook(book: Book): void {
  const bookList = document.getElementById("book-list");
  const bookDiv = document.createElement("div");
  bookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>By ${book.author}, ${book.year}</p>
  `;
  bookList?.appendChild(bookDiv);
}

// Create some book objects
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);

// Display the books on the webpage
displayBook(book1);
displayBook(book2);

// Task 3: Review interface
interface Review {
  bookId: number;
  rating: number;
  comment: string;
}

// Task 4 & 5: addReview function with type annotations
const reviews: Review[] = [];

function addReview(bookId: number, rating: number, comment: string): void {
  const review: Review = { bookId, rating, comment };
  reviews.push(review);
}

addReview(1, 5, "A timeless classic!");
addReview(2, 4, "Epic and long, but worth it.");