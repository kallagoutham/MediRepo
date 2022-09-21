import { useState, useEffect } from "react";
import "./Inventory.css";
import Search from "./Search";
import TableRow from "./TableRow";
import ReactPaginate from "react-paginate";
const itemsPerPage = 10;
const InventoryTable = (props) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const req = props.maintable;
  const [table, setTable] = useState(props.maintable);
  let newTable = [];
  const searchHandler = (keyvalue) => {
    setTable(req);
    newTable = [];
    for (const row of props.maintable) {
      if (row["name"].includes(keyvalue)) {
        newTable.push(row);
      }
    }
    setTable(newTable);
  };
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(table.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(table.length / itemsPerPage));
  }, [table, itemOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % table.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <br/><br/>
      <center><Search onSearch={searchHandler}/></center>
      <br/><br/>
      <table style={{ background: "white" }} className="table table-striped">
        <thead style={{ background: "lightskyblue" }} className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Batch</th>
            <th>stock</th>
            <th>Deal</th>
            <th>Free</th>
            <th>MRP</th>
            <th>Rate</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody className="thead-light">
          {currentItems.map((row) => (
            <TableRow
              key={Math.random().toString() + row.name}
              tableRow={row}
            />
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel="<-Previous"
        nextLabel="Next->"
        pageCount={pageCount}
        pageRangeDisplayed={3}
        renderOnZeroPageCount={null}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        previousLinkClassName="page-num "
        pageLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      ></ReactPaginate>
    </>
  );
};

export default InventoryTable;
