import Papa from "papaparse";
const MyForm=(props)=>{
    const submitHandler = (event) => {
        event.preventDefault();
        Papa.parse(props.myCSV, {
          header: true,
          skipEmptyLines: true,
          complete: function (results) {
            props.setInventoryFile(results.data);
          },
        });
      };
      const fileuploadHandler = (event) => {
        props.setCSV(event.target.files[0]);
      };
    return(
        <form onSubmit={submitHandler}>
        <center><input
          type="file"
          name="input-file"
          className="input"
          accept=".csv"
          onChange={fileuploadHandler}
        ></input></center>
        <br/><br/><br/>
        <center><button type="submit" className="button">
          submit
        </button></center>
      </form>
    );

};
export default MyForm;