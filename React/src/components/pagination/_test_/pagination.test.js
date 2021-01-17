import React from "react";
import ReactDOM from "react-dom";
import Pagination from "../pagination";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Pagination articles={[]} activePage={1} setActivePage={() => {}} pageCount={1}></Pagination>, div);
});
