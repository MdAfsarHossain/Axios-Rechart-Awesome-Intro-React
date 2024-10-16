import "./App.css";
import LineCharts from "./components/LineCharts/LineCharts";
import Navbar from "./components/Navbar/Navbar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <h1 className="text-3xl">Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>
      <Phones></Phones>
    </>
  );
}

export default App;
