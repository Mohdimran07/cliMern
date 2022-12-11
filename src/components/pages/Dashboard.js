import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../features/auth/authSlice";
import { getExpenseData, reset } from "../features/expenserTracker/expenseSlice";
import AddItems from "../form/AddItems";
import GetItem from "../form/GetItem";
import Spinner from "../loader/Spinner";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)
  const { data, isLoading, isError, isSuccess, message} = useSelector((state) => state.expense)
  console.log(data)


  
  useEffect(() => {
    if(isError){
      toast.error(message)
    }
    if (!user) {
      navigate('/login')
    }
    dispatch(getExpenseData())
    return () => {
      dispatch(reset())
    }
  }, [dispatch, isError, message, navigate, user])


  if(isLoading){
    return <Spinner />
  }

  return (
    <>
      <Navbar />
      {/* <nav class="navbar navbar-white bg-dark">
        <div class="container-fluid">
          <a href="/" class="navbar-brand text-white">
            <strong>Expense Tracker</strong>
          </a>
          <div class="d-flex mx-5">
            <button className="btn btn-sm btn-outline-primary p-2" type="button" >
              Logout
            </button>
          </div>
        </div>
      </nav> */}
      <div class=" container row">
        <div class="col-md-6 p-5">
          {/* <ExpenseTrackerForm currID={currID} setCurrID={setCurrID} /> */}
          <AddItems />
        </div>
        <div class="col-md-6 p-5">
          <GetItem />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
