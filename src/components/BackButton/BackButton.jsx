import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./BackButton.css";

function BackButton() {
  return (
    <Link to="/" className="back-button">
      <BiArrowBack /> Back
    </Link>
  );
}

export default BackButton;
