import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Invoices(props) {
  const { invoices } = props;
  let listInvoice =
    invoices &&
    invoices?.map((eInvoice) => {
      return (
        <NavLink
          className="list-group-item"
          style={({ isActive }) => {
            return {
              display: "block",
              padding: "0.3rem",
              paddingTop:'10px',
              paddingBottom:'10px',
              color: isActive ? "white" : "black",
            };
          }}
          to={`/salary/invoices/${eInvoice.number}`}
          key={eInvoice.number}
        >
          {eInvoice.name}
        </NavLink>
      );
    });

  return (
    <div className="row">
      <div className="col-6">
        <div className="list-group">{listInvoice}</div>
      </div>
      <div className="col-6">
        <div className="card m-2">
          <h4>Info</h4>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
