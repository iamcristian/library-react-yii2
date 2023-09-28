import { useFetch } from "../../hooks/useFetch";
import { BookCard } from "./BookCard";

export const BooksList = () => {
  const { data } = useFetch("http://localhost:8080/books");
  // console.log(data);

  return (
    <>
      {data &&
        data.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
    </>
  );
};
