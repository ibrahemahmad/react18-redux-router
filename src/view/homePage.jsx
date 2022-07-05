import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOne, minusOne } from "../redux/reducers/countSlice";
import _ from "lodash";

export default function HomePage() {
  const [valuesF, setValuesF] = useState("");
  const user = useSelector((state) => state.user);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const onSearch = _.debounce((val) => {
    console.log(val.target.value);
    setValuesF(val.target.value);
  }, 400);

  return (
    <div>
      <div className="card m-5 align-items-center p-4">
        <input
          type={"text"}
          className="form-control w-50 m-3"
          placeholder="Search "
          onChange={onSearch}
        />
        result :{valuesF}
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
