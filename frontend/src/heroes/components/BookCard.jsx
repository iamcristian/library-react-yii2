import { Link } from "react-router-dom";

export const BookCard = ({
  id,
  author,
  is_available,
  name,
  release_year
}) => {

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{author}</p>


              <p className="card-text">
                <small className="text-muted">{release_year}</small>
              </p>

              <Link to={`/book/${id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
