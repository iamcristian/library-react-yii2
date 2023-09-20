import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const BookPage = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const element = useFetch(`http://localhost:8080/books/${bookId}`);
  console.log(element);

  const onNavigateBack = () => {
    navigate(-1);
  };

  const book = element.data;

  return (
    <>
      <div className="row mt-5">
        <div className="col-4"></div>

        <div className="col-8">
          <h3>{book && book.name}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Author </b>
              {book && book.author}
            </li>
            <li className="list-group-item">
              <b>Publisher: </b>
              { book && book.release_year}
            </li>
            <li className="list-group-item">
              <b>First appearance: </b>
              {book && book.is_available}
            </li>
          </ul>

          <button className="btn btn-outline-primary" onClick={onNavigateBack}>
            Return
          </button>
        </div>
      </div>
    </>
  );
};

/*
 <>
      {book && 
        <div className="row mt-5">
          <div className="col-4">
          </div>

          <div className="col-8">
            <h3>{book.name}</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Author </b>
                {book.author}
              </li>
              <li className="list-group-item">
                <b>Publisher: </b>
                {book.release_year}
              </li>
              <li className="list-group-item">
                <b>First appearance: </b>
                {book.is_available}
              </li>
            </ul>

            <button
              className="btn btn-outline-primary"
              onClick={onNavigateBack}
            >
              Return
            </button>
          </div>
        </div>
      }
 </>
    */
