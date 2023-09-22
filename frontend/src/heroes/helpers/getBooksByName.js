import { useFetch } from "../../hooks/useFetch";

export const getBooksByName = (name) => {
  name = name.toLowerCase().trim();
  const elements = useFetch(`http://localhost:8080/books`);
  console.log(elements);
  let booksFiltered = [];

  let books = elements.data ? elements.data : [];

  if (books.length === 0) return [];

  for (let book in books) {
    if (book.name.toLowerCase().includes(name)) {
      booksFiltered.push(book);
    }
  }

  console.log(booksFiltered);

  return booksFiltered;
};
