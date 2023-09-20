import { useFetch } from "../../hooks/useFetch"

export const getBookById = (id) => {

  const {data} = useFetch(`http://localhost:8080/books/1`);

  if (jsonbook.hasError) {
    return null
  }

  return jsonbook.data;

}