import React, { useState } from "react";
import "./BasicAlignment.css";
import MyData from "./MyData";
import MyForm from "./MyForm";
const BasicAlignment = () => {
  const [myCSV, setCSV] = useState();
  const [InventoryFile, setInventoryFile] = useState([]);
  return (
    <div className="my-app">
      <div className="app-title">Inventory Analyser</div>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <center>
        <MyForm
          setCSV={setCSV}
          myCSV={myCSV}
          setInventoryFile={setInventoryFile}
        ></MyForm>
      </center>

      {InventoryFile.length > 0 && <MyData file={InventoryFile}></MyData>}
    </div>
  );
};
export default BasicAlignment;
