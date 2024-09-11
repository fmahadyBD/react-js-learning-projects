import Button from "./components/Button";

Button;

function App() {
  return (
    <div>
      <Button color="secondary" onClick={() => console.log("hi")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
