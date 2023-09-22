import { Link } from "react-router-dom";
import { BooksList } from "../components/BooksList";

export const BooksPage = () => {
  return (
    <>
      <h1>Books</h1>
      <Link to={"/books/create"}>
        <button className="btn btn-primary">Add Book</button>
      </Link>
      <hr />

      <BooksList />
    </>
  );
};
