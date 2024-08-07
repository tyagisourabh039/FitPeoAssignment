import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div className="main">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
