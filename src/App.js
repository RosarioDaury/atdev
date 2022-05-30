import DataAndDate from "./Components/DataAndInfo/DataAndDate";
import FinalResult from "./Components/Results/FinalResults/FinalResult";
import Results from "./Components/Results/Result/Results";
import Salaries from "./Components/SalaryZone/Salaries";
import { InfoProvider } from "./Context/infoContext";
function App() {

  return (
    <InfoProvider>
      <div className="app">

        <div className="header">
          <img src="https://calculo.mt.gob.do/images/head-3.png" alt="imagen-header" />
        </div>

        <br />

        <div className="data_and_date">
          <DataAndDate />
        </div>

        <br />

        <div className="double-zone">
          <Salaries />
          <div className="results">
            <Results />
            <br/>
            <FinalResult />
          </div>

        </div>

        <br />
        <br />
        <br />
      </div>
    </InfoProvider>
  );
}

export default App;
