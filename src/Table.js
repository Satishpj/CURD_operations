function Table(props) {
  const { products } = props;
  return (
    <table className="table m-3">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map((eachProduct) => (
          <tr key={eachProduct.id}>
            <td>{eachProduct.id}</td>
            <td>{eachProduct.name}</td>
            <td>{eachProduct.price}</td>
            <td>{eachProduct.category}</td>
            <td>
              <button
                className="btn btn-primary m-1"
                onClick={() => props.edit(eachProduct)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger m-1"
                onClick={() => props.delete(eachProduct.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
