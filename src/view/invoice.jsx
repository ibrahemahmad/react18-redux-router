import React from "react";
import {Link, Outlet } from "react-router-dom";

export default function Invoices(props) {
  const { invoices } = props;
  let listInvoice=invoices && invoices?.map((eInvoice)=>{
    return <div className="list-group"><Link to={`/salary/invoices/${eInvoice.number}`} className="list-group-item">{eInvoice.name}</Link></div>
  });
  
  return <div className="row">
    <div className="col-6">
    {listInvoice}
    </div>
    <div className="col-6">
    <div className="card m-2">
      <h4>Info</h4>
        <Outlet/>
    </div>
    </div>
    </div>;
}
