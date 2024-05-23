export const Table = () => {
  return (
    <div class="form-control shadow-lg p-3 mb-5 bg-body rounded">
      //{" "}
      <h1 class="d-flex justify-content-center fw-bolder p-3">
        // Expense History //{" "}
      </h1>
      //{" "}
      <table class="table table-striped">
        //{" "}
        <thead>
          //{" "}
          <tr>
            // <th scope="col">Date</th>
            // <th scope="col">Amount</th>
            // <th scope="col">Category</th>
            // <th scope="col">Description</th>
            // <th scope="col">Actions</th>
            //{" "}
          </tr>
          //{" "}
        </thead>
        //{" "}
        <tbody>
          //{" "}
          <tr>
            // <td>2024-05-16</td>
            // <td>Mark</td>
            // <td>Otto</td>
            // <td>@mdo</td>
            //{" "}
            <td>
              //{" "}
              <button type="button" class="btn btn-danger">
                // Delete //{" "}
              </button>
              //{" "}
            </td>
            //{" "}
          </tr>
          //{" "}
          <tr>
            // <td>2</td>
            // <td>Jacob</td>
            // <td>Thornton</td>
            // <td>@fat</td>
            //{" "}
            <td>
              //{" "}
              <button type="button" class="btn btn-danger">
                // Delete //{" "}
              </button>
              //{" "}
            </td>
            //{" "}
          </tr>
          //{" "}
          <tr>
            // <td>3</td>
            // <td>Larry the Bird</td>
            // <td></td>
            // <td>@twitter</td>
            //{" "}
            <td>
              //{" "}
              <button type="button" class="btn btn-danger">
                // Delete //{" "}
              </button>
              //{" "}
            </td>
            //{" "}
          </tr>
          //{" "}
        </tbody>
        //{" "}
      </table>
      //{" "}
    </div>
  );
};
export default Table;
