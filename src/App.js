import "./styles.css";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./utils/firebase";

export default function App() {
  const app = initializeApp(firebaseConfig);

  return (
    <div className="container">
      <div className="row" style={{ justifyContent: "space-evenly" }}>
        <LineChart app={app} />
        <PieChart app={app} />
      </div>
    </div>
  );
}
