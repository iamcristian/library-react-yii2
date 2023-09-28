import queryString from "query-string";

import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getBooksByName } from "../helpers/getBooksByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const books = getBooksByName(q);
  console.log(books)

  const showSearch = q.lenght === 0;
  const showError = q.lenght > 0 && books.lenght === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
    </>
  );
};
