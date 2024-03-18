import "./ResponseScreen.css";
import ServicesOptions from "../ServicesOptions/ServicesOptions";
import { useChatContext } from "../../context/ChatContext";
import { RestartRobot } from "../../assets/images";

const ResponseScreen = () => {
  const { aiResponse, optionsSelected, restartRequired } = useChatContext();
  return (
    <div className="prompot__response-cont ">
      {restartRequired && (
        <div className="prompot__response-restart">
          <img src={RestartRobot} alt="Restarting robot..." />
          <span>Something went wrong!!</span>
        </div>
      )}

      {!restartRequired &&
        (optionsSelected ? (
          <div dangerouslySetInnerHTML={{ __html: aiResponse }} />
        ) : (
          <ServicesOptions />
        ))}
    </div>
  );
};

export default ResponseScreen;
