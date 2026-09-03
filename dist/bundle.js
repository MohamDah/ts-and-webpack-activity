/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

// --- TypeScript Code ---
// Task 2: Book class
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    return Book;
}());
// Task 1: Function to display book information with type annotations
function displayBook(book) {
    var bookList = document.getElementById("book-list");
    var bookDiv = document.createElement("div");
    bookDiv.innerHTML = "\n    <h2>".concat(book.title, "</h2>\n    <p>By ").concat(book.author, ", ").concat(book.year, "</p>\n  ");
    bookList === null || bookList === void 0 ? void 0 : bookList.appendChild(bookDiv);
}
// Create some book objects
var book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
var book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);
// Display the books on the webpage
displayBook(book1);
displayBook(book2);
// Task 4 & 5: addReview function with type annotations
var reviews = [];
function addReview(bookId, rating, comment) {
    var review = { bookId: bookId, rating: rating, comment: comment };
    reviews.push(review);
}
addReview(1, 5, "A timeless classic!");
addReview(2, 4, "Epic and long, but worth it.");

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1hbmQtd2VicGFjay1hY3Rpdml0eS8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gLS0tIFR5cGVTY3JpcHQgQ29kZSAtLS1cbi8vIFRhc2sgMjogQm9vayBjbGFzc1xudmFyIEJvb2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm9vayh0aXRsZSwgYXV0aG9yLCB5ZWFyKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XG4gICAgICAgIHRoaXMueWVhciA9IHllYXI7XG4gICAgfVxuICAgIHJldHVybiBCb29rO1xufSgpKTtcbi8vIFRhc2sgMTogRnVuY3Rpb24gdG8gZGlzcGxheSBib29rIGluZm9ybWF0aW9uIHdpdGggdHlwZSBhbm5vdGF0aW9uc1xuZnVuY3Rpb24gZGlzcGxheUJvb2soYm9vaykge1xuICAgIHZhciBib29rTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9vay1saXN0XCIpO1xuICAgIHZhciBib29rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib29rRGl2LmlubmVySFRNTCA9IFwiXFxuICAgIDxoMj5cIi5jb25jYXQoYm9vay50aXRsZSwgXCI8L2gyPlxcbiAgICA8cD5CeSBcIikuY29uY2F0KGJvb2suYXV0aG9yLCBcIiwgXCIpLmNvbmNhdChib29rLnllYXIsIFwiPC9wPlxcbiAgXCIpO1xuICAgIGJvb2tMaXN0ID09PSBudWxsIHx8IGJvb2tMaXN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBib29rTGlzdC5hcHBlbmRDaGlsZChib29rRGl2KTtcbn1cbi8vIENyZWF0ZSBzb21lIGJvb2sgb2JqZWN0c1xudmFyIGJvb2sxID0gbmV3IEJvb2soXCJUaGUgSG9iYml0XCIsIFwiSi5SLlIuIFRvbGtpZW5cIiwgMTkzNyk7XG52YXIgYm9vazIgPSBuZXcgQm9vayhcIlRoZSBMb3JkIG9mIHRoZSBSaW5nc1wiLCBcIkouUi5SLiBUb2xraWVuXCIsIDE5NTQpO1xuLy8gRGlzcGxheSB0aGUgYm9va3Mgb24gdGhlIHdlYnBhZ2VcbmRpc3BsYXlCb29rKGJvb2sxKTtcbmRpc3BsYXlCb29rKGJvb2syKTtcbi8vIFRhc2sgNCAmIDU6IGFkZFJldmlldyBmdW5jdGlvbiB3aXRoIHR5cGUgYW5ub3RhdGlvbnNcbnZhciByZXZpZXdzID0gW107XG5mdW5jdGlvbiBhZGRSZXZpZXcoYm9va0lkLCByYXRpbmcsIGNvbW1lbnQpIHtcbiAgICB2YXIgcmV2aWV3ID0geyBib29rSWQ6IGJvb2tJZCwgcmF0aW5nOiByYXRpbmcsIGNvbW1lbnQ6IGNvbW1lbnQgfTtcbiAgICByZXZpZXdzLnB1c2gocmV2aWV3KTtcbn1cbmFkZFJldmlldygxLCA1LCBcIkEgdGltZWxlc3MgY2xhc3NpYyFcIik7XG5hZGRSZXZpZXcoMiwgNCwgXCJFcGljIGFuZCBsb25nLCBidXQgd29ydGggaXQuXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9