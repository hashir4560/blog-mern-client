import "./App.css";
//components
import Login from "./components/accounts/Login";
import DataProvider from "./context /DataProvider";

function App() {
  return (
    <div className="App" style={{ marginTop: 64 }}>
      <DataProvider>
        <Login />
      </DataProvider>
    </div>
  );
}
export default App;
