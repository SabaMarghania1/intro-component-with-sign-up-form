import "./App.css";
import Header from "./Header/Header";
import FreePlan from "./Main/FreePlan";
import Main from "./Main/Main";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <FreePlan />
        <Main />
      </main>
    </div>
  );
}

export default App;
