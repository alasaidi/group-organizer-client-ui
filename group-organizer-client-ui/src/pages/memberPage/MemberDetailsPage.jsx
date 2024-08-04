import "./memberDetailsPage.css";
import { useParams } from "react-router-dom";

export const MemberDetailsPage = () => {
  const params = useParams();
  return (
    <div className="Member-Details-Page">
      <h2>details from members {params.id} </h2>
    </div>
  );
};
