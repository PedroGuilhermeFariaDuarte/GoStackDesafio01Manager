import React from 'react';
import app from "../css/app.css";
import Header from "../components/header";
import Container from "../components/container";

function App() {
  // const {app,setApp} = useState(false);
  return (       
    <div className="main"> 
        <Header/>       
        <Container/>
    </div>
  );
}

export default App;
