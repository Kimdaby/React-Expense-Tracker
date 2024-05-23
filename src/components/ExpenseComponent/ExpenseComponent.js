import React from "react";

const ExpenseList = ({ items, deleteItem }) => {
  const totalAmount = items.reduce((total, item) => total + item.amount, 0);

  return (
    <div className="inputContainer container pt-5">
      <div className="form-control shadow-lg p-3 mb-5 bg-body rounded gap-3 d-grid">
        <h2 className="d-flex justify-content-center fw-bolder">
          Expense History
        </h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>${item.amount}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-3">
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
