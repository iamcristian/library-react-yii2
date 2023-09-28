import { Link } from "react-router-dom";

export const MemberCard = ({ id, name, started_on}) => {
  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4"></div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{started_on}</p>

              <Link to={`/member/${id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
