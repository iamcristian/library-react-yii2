import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const MemberPage = () => {
  const { memberId } = useParams();
  const navigate = useNavigate();

  const element = useFetch(`http://localhost:8080/members/${memberId}`);

  const onNavigateBack = () => {
    navigate(-1);
  };

  const member = element.data;

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
        <h3>{member && member.name}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Id </b>
            {member && member.id}
          </li>
          <li className="list-group-item">
            <b>Started on: </b>
            {member && member.started_on}
          </li>
        </ul>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Return
        </button>
      </div>
    </div>
  );
};
