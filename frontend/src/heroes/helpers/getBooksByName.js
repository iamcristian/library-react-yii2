import { useFetch } from "../../hooks/useFetch";

export const getBooksByName = (name = "") => {
  const { data: books } = useFetch(`http://localhost:8080/books`);
  name = name.toLowerCase().trim();
  let booksFiltered = [];

  for (let book in books) {
    if (book.name.toLowerCase().includes(name)) {
      booksFiltered.push(book);
    }
  }

  return booksFiltered?.length > 0 ? booksFiltered : [];
};
