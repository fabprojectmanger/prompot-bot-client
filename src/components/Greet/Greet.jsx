import "./Greet.css";
import { PrompotBotLogo } from "../../assets/images";

const Greet = () => {
  return (
    <div className="prompot__greet">
      <img
        src={PrompotBotLogo}
        className="prompot__greet-logo"
        alt="prompot-logo"
      />
      <div className="prompot__greet-text">
        Your All-in-One Solution for Information Technology Excellence
      </div>
    </div>
  );
};

export default Greet;
