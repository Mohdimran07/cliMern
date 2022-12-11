import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createExpense } from "../features/expenserTracker/expenseSlice";

const AddItems = () => {
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [amount, setAmount] = useState();
  const dispatch = useDispatch()

  const { data, isLoading, isSuccess, isError, message} = useSelector((state) => state.expense)
  

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title)
   

    if(isError){
      toast.error(message)
    } else {
        dispatch(createExpense({title, amount, category}))
        toast.success("Item added", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
    }
    
  };
  return (
    <>
      {/* <div className="text-center m-2 rounded" style={{backgroundColor: "#000" }}>
      <ul class="list-group text-white">
        <li class="list-group-items p-2 ">{currID ? "Updating" : "create Post"}</li>
      </ul>
    </div> */}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="amount"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AddItems;
