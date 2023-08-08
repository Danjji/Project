import { useParams } from "react-router-dom";

function DebateDetail() {
  const { id } = useParams();

  return <div>{id}</div>;
}

export default DebateDetail;
