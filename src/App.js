import "./styles.css";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import Finish from "./components/Finish";

export default function App() {
  return (
    <div className="app">
      <Header />
      <ProgressBar />
      <Finish />
    </div>
  );
}
