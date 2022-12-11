import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logoutHandler = (e) => {
    // e.preventDefault()
    dispatch(logout())
    // localStorage.removeItem('user')
    // dispatch(reset())
    navigate('/login')
  }
  return (
    <>
      {/* <div className="d-flex" style={{ backgroundColor: "#000" }}>
        <nav class="navbar mx-5 ">
          <span class="navbar-brand mb-0 h1 text-white">
            <strong>Expense Tracker</strong>
          </span>
        </nav>
      </div> */}
      <nav class="navbar navbar-white bg-dark">
        <div class="container-fluid">
          <a href="/" class="navbar-brand text-white">
            <strong>Expense Tracker</strong>
          </a>
          <div class="d-flex mx-5">
            <button className="btn btn-sm btn-outline-primary p-2"  onClick={logoutHandler}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
