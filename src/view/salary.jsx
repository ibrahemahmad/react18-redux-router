import React from "react";
import {Link,Outlet} from 'react-router-dom'
export default function Salary() {
  return (
    <div className="m-5 ">
      <div className="nav nav-fill bg-dark rounded-5">
        <Link to="/salary/invoices" className="nav-item nav-link">Invoices</Link>
        <Link to="/salary/more" className="nav-item nav-link">More</Link>
      </div>
      <div className="card mt-3 p-2">
        
        <Outlet/>

      </div>
    </div>
  );
}
