import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getBookById } from "../helpers";

export const MemberPage = () => {
  const { memberId } = useParams();
  const navigate = useNavigate();

  const member = getBookById(bookId);
  console.log(member);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!member) {
    return <Navigate to={"/members"} />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        {/* <img
          src={`/assets/heroes/${heroId}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        /> */}
      </div>

      <div className="col-8">
        <h3>{member.name}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Author </b>
            {member.author}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {member.release_year}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {member.is_available}
          </li>
        </ul>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Return
        </button>
      </div>
    </div>
  );
};
