import Keyboard from "./components/Keyboard/Keyboard";

const App = () => {
  const displayContent = 667359961;

  return (
    <div className="container">
      {/* El siguiente elemento se oculta añadiéndole la clase "off" */}
      <span className="message">Calling...</span>
      <main className="phone">
        <Keyboard />
        <div className="actions">
          <span className="number">{displayContent}</span>
          <a href="call" className="call">
            Call
          </a>
          <a href="hang" className="hang active">
            Hang
          </a>
        </div>
      </main>
    </div>
  );
};

export default App;
