import { getData, deleteData, postData, putData } from "./api";
import Form from "./Form";
import Table from "./Table";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const [openForm, setOpenForm] = useState(false);

  const [edit, setEdit] = useState(false);

  const [initialForm, setForm] = useState({
    name: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    getProducts();
  }, []);

  let getProducts = async () => {
    let res = await getData();
    setProducts(res.data);
  };

  let deleteProduct = async (id) => {
    await deleteData(id);
    getProducts();
  };

  let addProduct = async (product) => {
    let data = {
      name: product.name,
      price: product.price,
      category: product.category,
    };

    if (edit) {
      setEdit(false);
      await putData(product.id, data);
    } else await postData(product);
    getProducts();
    setOpenForm(false);
  };

  let editProduct = async (data) => {
    setForm(data);
    setOpenForm(true);
    setEdit(true);
  };

  let showForm = () => {
    setOpenForm(true);
    setForm({ name: "", price: "", category: "" });
  };

  let closeForm = () => {
    setOpenForm(false);
  };

  return (
    <div className="m-5 w-50">
      <div className="wrapper">
        <h1 className="text-primary">CRUD operations</h1>
        <button className="btn btn-primary" onClick={showForm}>
          Add Product
        </button>
      </div>
      <Table products={products} delete={deleteProduct} edit={editProduct} />
      {openForm && (
        <Form close={closeForm} data={initialForm} add={addProduct} />
      )}
    </div>
  );
}

export default App;
