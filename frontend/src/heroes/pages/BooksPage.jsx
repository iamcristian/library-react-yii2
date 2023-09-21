import { BooksList } from "../components/BooksList";

let createBook = () => {
  console.log("createBook");
};

export const BooksPage = () => {
  return (
    <>
      <h1>Books</h1>
      <button className="btn btn-primary" onClick={createBook}>
        Add Book
      </button>
      <hr />

      <BooksList />
    </>
  );
};
