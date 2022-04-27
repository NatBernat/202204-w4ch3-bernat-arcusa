import Key from "../Key/Key";
import keysList from "../../data/keysList";

const Keyboard = ({ keys }) => {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {keysList.map((key, i) => (
          <Key
            text={key}
            className={typeof key === "string" ? "key big" : "key"}
            key={i}
          />
        ))}
      </ol>
    </div>
  );
};

export default Keyboard;
