import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar.tsx";
import MainPage from "./components/content/MainPage";
function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <MainPage />
      </div>
    </>
  );
}

export default App;
