import Key from "../Key/Key";
import keysList from "../../data/keysList";

const Keyboard = ({ keys }) => {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {keysList.map((key, index) => (
          <Key
            text={key}
            className={typeof key === "string" ? "key big" : "key"}
            key={index}
          />
        ))}
      </ol>
    </div>
  );
};

export default Keyboard;
