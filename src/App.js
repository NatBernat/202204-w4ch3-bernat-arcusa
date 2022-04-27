import Actions from "./components/Actions/Actions";
import Keyboard from "./components/Keyboard/Keyboard";

const App = () => {
  const displayContent = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="container">
      {/* El siguiente elemento se oculta añadiéndole la clase "off" */}
      <span className="message">Calling...</span>
      <main className="phone">
        <Keyboard />
        <Actions displayContent={displayContent} />
      </main>
    </div>
  );
};

export default App;
