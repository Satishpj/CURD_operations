import { useState } from "react";

function Form(props) {
  const [product, setProduct] = useState(props.data);

  const [submitted, setSubmitted] = useState(false);

  let changeFormData = (event) => {
    const { name, value } = event.target;

    setProduct({ ...product, [name]: value });
  };
  return (
    <div className="form-overlay">
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            className="form-control mt-2"
            type="text"
            value={product.name}
            name="name"
            placeholder="Enter Product Name"
            onChange={changeFormData}
          />
          {submitted && product.name === "" && (
            <p className="text-danger">*Field Required</p>
          )}
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            className="form-control mt-2"
            type="number"
            value={product.price}
            name="price"
            placeholder="Enter Product Price"
            onChange={changeFormData}
          />
          {submitted && product.price === "" && (
            <p className="text-danger">*Field Required</p>
          )}
        </div>
        <div className="form-group">
          <label>Category:</label>
          <select
            className="form-control mt-2"
            name="category"
            value={product.category}
            onChange={changeFormData}
          >
            <option value="-1"></option>
            <option value={"mobile"}>Mobile</option>
            <option value={"laptop"}>Laptop</option>
            <option value={"tv"}>TV</option>
          </select>
        </div>
        {submitted && product.category === "" && (
          <p className="text-danger">*Field Required</p>
        )}
        <button
          className="btn btn-primary float-end"
          onClick={(event) => {
            setSubmitted(true)
            event.preventDefault();
            if (product.name && product.price && product.category) {
              props.add(product);
            }
          }}
        >
          Send
        </button>
        <button
          className="btn btn-danger float-end"
          onClick={(event) => {
            event.preventDefault();
            props.close();
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Form;
