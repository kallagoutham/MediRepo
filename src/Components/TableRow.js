import { useState } from "react";
const TableRow = (props) =>{
    const tableRow = props.tableRow;
    const [batch , setBatch] = useState("ALL")
    const newdata = []
    for (const key in tableRow){
        if (key !== 'name'){

            newdata.push(key)
        }
    }
    const selectChangeHandler = (event) =>{
        setBatch(event.target.value);
    }
    return <tr>
        <td>{tableRow.name}</td>
        <td>
            <select onChange={selectChangeHandler} value={batch} >
                {newdata.map(data => <option key={Math.random()}>{data}</option>)}
            </select>
            </td>
        <td>{tableRow[batch]['stock']}</td>
        <td>{tableRow[batch]['deal']}</td>
        <td>{tableRow[batch]['free']}</td>
        <td>{tableRow[batch]['mrp']}</td>
        <td>{tableRow[batch]['rate']}</td>
        <td>{tableRow[batch]['exp']}</td>
        
    </tr>
}
export default TableRow;