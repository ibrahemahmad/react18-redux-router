import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOne, minusOne } from "../redux/reducers/countSlice";
import _ from "lodash";
import { NavLink, useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function HomePage(props) {
  const {invoices}=props
  //path name and query
  let location = useLocation();
  const user = useSelector((state) => state.user);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  //from this router hook you can route programmaticaly
  let navigate = useNavigate();
  //  navigate("/invoices" + location.search);
  let [searchParams, setSearchParams] = useSearchParams();
  const onSearch = _.debounce((val) => {
    let filter = val.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  }, 400);

  return (
    <div>
      <div className="card m-5 align-items-center p-4">
        <input
          defaultValue={searchParams.get("filter") || ""}
          type={"text"}
          className="form-control w-50 m-3"
          placeholder="Search "
          onChange={onSearch}
        />
        <div className="w-50">List Invoice</div>
        <div className="list-group w-50">
          
        {invoices?.filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            let result = name.startsWith(filter.toLowerCase());
            return result ;
          })
          ?.map((invoice) => (
            <NavLink
              className="list-group-item"
              to={`/salary/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))||'write something to search'}
        </div>

      </div>
      <div className="card position-absolute m-5 p-4 end-0 start-0">
        <p>
          {" "}
          <span className="badge bg-primary me-1 "> number user</span>
          <span className="badge bg-primary text-light"> {user?.value}</span>
        </p>
        <p>
          {" "}
          <span className="badge  me-1  bg-warning   "> counter </span>
          <span className="badge bg-warning text-light"> {count.initV}</span>
        </p>
        <div
          className="w-100 d-flex flex-column "
          style={{ alignItems: "center" }}
        >
          <button
            className="btn btn-warning w-50 mb-3"
            onClick={() => {
              dispatch(addOne(10));
            }}
          >
            +
          </button>
          <button
            className="btn btn-primary w-50"
            onClick={() => {
              dispatch(minusOne(10));
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
