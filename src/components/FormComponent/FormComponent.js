import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ addExpense }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    addExpense(data);
    reset();
  };

  return (
    <div className="inputContainer container pt-5">
      <div className="form-control shadow-lg p-3 mb-5 bg-body rounded gap-3 d-grid">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="d-flex justify-content-center fw-bolder">
            Expense Tracker
          </h1>
          <label htmlFor="date">Date of Purchase:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            required
            {...register("date")}
          />
          <label htmlFor="amount">Amount:</label>
          <div className="input-group mb-4">
            <span className="input-group-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-currency-dollar"
                viewBox="0 0 16 16"
              >
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
              </svg>
            </span>
            <input
              type="number"
              className="form-control"
              id="amount"
              min="0"
              required
              {...register("amount")}
            />
          </div>

          <label htmlFor="category">Category:</label>
          <div className="input-group mb-4">
            <span className="input-group-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-list-task"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"
                />
                <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
                <path
                  fillRule="evenodd"
                  d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"
                />
              </svg>
            </span>

            <select
              className="form-control"
              id="category"
              required
              {...register("category")}
            >
              <option value="">Select a Category</option>
              <option value="Bills">Bills & Utilities</option>
              <option value="Dining">Dining</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Travel">Travel</option>
              <option value="Grocery">Grocery</option>
              <option value="Gas">Gas</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            aria-label="With textarea"
            required
            {...register("description")}
          ></textarea>

          <div className="mt-3">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
