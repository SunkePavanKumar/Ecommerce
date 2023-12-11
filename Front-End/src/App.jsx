import "./App.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <main className=" pt-24 bg-slate-100 max-h-max w-full">
        <Outlet />
      </main>
    </>
  );
}

export default App;
