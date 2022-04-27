import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

const App = () => {
  const displayContent = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="container">
      <Info className="message" message="Calling..." />
      <main className="phone">
        <Keyboard />
        <Actions displayContent={displayContent} />
      </main>
    </div>
  );
};

export default App;
