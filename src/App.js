import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
