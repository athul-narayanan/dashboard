import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import {models} from "powerbi-client"



function App() {
  return (
    <div className="App">
     <iframe title="test" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=0d80be75-f69c-4795-b94d-aa2880f26cdf&autoAuth=true&ctid=f651bb08-d47e-4082-9eac-58ea3ae7ad1f" frameborder="0" allowFullScreen="true"></iframe>
    </div>
  );
}

export default App;
