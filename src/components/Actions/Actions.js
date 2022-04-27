import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = ({ displayContent }) => {
  return (
    <div className="actions">
      <Display displayContent={displayContent} className="number" />
      <Action text="Call" className="call" href="#" />
      <Action text="Hang" className="hang active" href="#" />
    </div>
  );
};

export default Actions;
