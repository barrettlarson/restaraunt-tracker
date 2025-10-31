import { useState } from 'react';

function App() {
  const API_BASE = "http://localhost:8000";
  const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSupplierModalOpen, setIsSupplierModalOpen] = useState(false);
  const [isDeleteSupplierModalOpen, setIsDeleteSupplierModalOpen] = useState(false);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isDeleteItemModalOpen, setIsDeleteItemModalOpen] = useState(false);
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);
  const [isDeleteRecipeModalOpen, setIsDeleteRecipeModalOpen] = useState(false);
  const [isCustomerOrderModalOpen, setIsCustomerOrderModalOpen] = useState(false);
  const [isDeleteCustomerOrderModalOpen, setIsDeleteCustomerOrderModalOpen] = useState(false);
  const [isIngredientModalOpen, setIsIngredientModalOpen] = useState(false);
  const [isDeleteIngredientModalOpen, setIsDeleteIngredientModalOpen] = useState(false);
  const [isPurchaseOrderModalOpen, setIsPurchaseOrderModalOpen] = useState(false);
  const [isDeletePurchaseOrderModalOpen, setIsDeletePurchaseOrderModalOpen] = useState(false);


  const openEmployeeModal = () => setIsEmployeeModalOpen(true);
  const closeEmployeeModal = () => setIsEmployeeModalOpen(false);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const openSupplierModal = () => setIsSupplierModalOpen(true);
  const closeSupplierModal = () => setIsSupplierModalOpen(false);

  const openDeleteSupplierModal = () => setIsDeleteSupplierModalOpen(true);
  const closeDeleteSupplierModal = () => setIsDeleteSupplierModalOpen(false);

  const openItemModal = () => setIsItemModalOpen(true);
  const closeItemModal = () => setIsItemModalOpen(false);

  const openDeleteItemModal = () => setIsDeleteItemModalOpen(true);
  const closeDeleteItemModal = () => setIsDeleteItemModalOpen(false);

  const openRecipeModal = () => setIsRecipeModalOpen(true);
  const closeRecipeModal = () => setIsRecipeModalOpen(false);

  const openDeleteRecipeModal = () => setIsDeleteRecipeModalOpen(true);
  const closeDeleteRecipeModal = () => setIsDeleteRecipeModalOpen(false);

  const openCustomerOrderModal = () => setIsCustomerOrderModalOpen(true);
  const closeCustomerOrderModal = () => setIsCustomerOrderModalOpen(false);

  const openDeleteCustomerOrderModal = () => setIsDeleteCustomerOrderModalOpen(true);
  const closeDeleteCustomerOrderModal = () => setIsDeleteCustomerOrderModalOpen(false);

  const openIngredientModal = () => setIsIngredientModalOpen(true);
  const closeIngredientModal = () => setIsIngredientModalOpen(false);

  const openDeleteIngredientModal = () => setIsDeleteIngredientModalOpen(true);
  const closeDeleteIngredientModal = () => setIsDeleteIngredientModalOpen(false);

  const openPurchaseOrderModal = () => setIsPurchaseOrderModalOpen(true);
  const closePurchaseOrderModal = () => setIsPurchaseOrderModalOpen(false);

  const openDeletePurchaseOrderModal = () => setIsDeletePurchaseOrderModalOpen(true);
  const closeDeletePurchaseOrderModal = () => setIsDeletePurchaseOrderModalOpen(false);

  async function submitAddEmployee(e) {
    e.preventDefault();
    const first = document.getElementById("firstName").value;
    const last = document.getElementById("lastName").value;
    const id = document.getElementById("employeeId").value;
    const phone = document.getElementById("phoneNumber").value;

    try {
      const res = await fetch(`${API_BASE}/employees`, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
          first_name: first.trim(),
          last_name: last.trim(),
          employee_id: Number(id),
          phone_number: phone.trim()
        })
      });
    if (!res.ok) throw new Error(await res.text());
    alert("Employee added!");
    closeEmployeeModal();
    } catch (error) {
      alert("Failed to add an employee: " + error.message);
    }
  }

  async function submitDeleteEmployee(e) {
    e.preventDefault();

    const idRaw = document.getElementById("deleteEmployeeId").value.trim();
    if (!idRaw) {
      alert("Please enter an Employee ID.");
      return;
    }
    const id = Number(idRaw);
    if (!Number.isFinite(id)) {
      alert("Employee ID must be a number.");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/employees/${id}`, { method: "DELETE" });
      if (!res.ok) {
        let msg = await res.text();
        try { msg = JSON.parse(msg).error || msg; } catch {}
        throw new Error(msg || `HTTP ${res.status}`);
      }
      alert("Employee deleted.");
      closeDeleteModal();
    } catch (error) {
      alert("Failed to delete employee: " + error.message);
    }
  }


  async function submitAddIngreident(e) {
    e.preventDefault();
    const name = document.getElementById("ingredientName").value;
    const amount = document.getElementById("ingredientAmount").value;
    const storage = document.getElementById("storageType").value;

    try {
      const res = await fetch(`${API_BASE}/ingredients`, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
          name: name.trim(),
          amount: Number(amount),
          storage_type: storage.trim()
        })
      });
      if (!res.ok) throw new Error(await res.text());
      alert("Ingredient added!");
      closeIngredientModal();
    } catch (error) {
      alert("Failed to add an ingredient: " + error.message);
    }
  }

  async function submitDeleteIngredient(e) {
    e.preventDefault();

    const name = document.getElementById("deleteIngredientName").value.trim();
    if (!name) {
      alert("Please enter an ingredient name.");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/ingredients/${name}`, { method: "DELETE" });
      if (!res.ok) {
        let msg = await res.text();
        try { msg = JSON.parse(msg).error || msg; } catch {}
        throw new Error(msg || `HTTP ${res.status}`);
      }
      alert("Ingredient deleted.");
      closeDeleteModal();
    } catch (error) {
      alert("Failed to delete ingredient: " + error.message);
    }
  }

  const handleEmployeeModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeEmployeeModal();
    }
  };

  const handleDeleteModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeDeleteModal();
    }
  };

  const handleSupplierModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeSupplierModal();
    }
  };

  const handleDeleteSupplierModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeDeleteSupplierModal();
    }
  };

  const handleItemModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeItemModal();
    }
  };

  const handleDeleteItemModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeDeleteItemModal();
    }
  };

  const handleRecipeModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeRecipeModal();
    }
  };

  const handleDeleteRecipeModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeDeleteRecipeModal();
    }
  };

  const handleCustomerOrderModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeCustomerOrderModal();
    }
  };

  const handleDeleteCustomerOrderModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeDeleteCustomerOrderModal();
    }
  };

  const handleIngredientModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeIngredientModal();
    }
  };

  const handleDeleteIngredientModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeDeleteIngredientModal();
    }
  };

  const handlePurchaseOrderModalClick = (e) => {
    if (e.target.className === 'modal') {
      closePurchaseOrderModal();
    }
  };

  const handleDeletePurchaseOrderModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeDeletePurchaseOrderModal();
    }
  };


  return (
    <>
      <div className="container">
        <h1>Restaurant Tracker</h1>

        <div className="table-links">
          <button className="table-btn" onClick={openEmployeeModal}>
            Add Employee
          </button>
          <button className="table-btn" onClick={openDeleteModal}>
            Delete Employee
          </button>
        </div>

        <div className="table-links">
          <button className="table-btn" onClick={openSupplierModal}>
            Add Supplier
          </button>
          <button className="table-btn" onClick={openDeleteSupplierModal}>
            Delete Supplier
          </button>
        </div>
        <div className="table-links">
          <button className="table-btn" onClick={openItemModal}>
            Add Item
          </button>
          <button className="table-btn" onClick={openDeleteItemModal}>
            Delete Item
          </button>
        </div>
        <div className="table-links">
          <button className="table-btn" onClick={openRecipeModal}>
            Add Recipe
          </button>
          <button className="table-btn" onClick={openDeleteRecipeModal}>
            Delete Recipe
          </button>
        </div>
        <div className="table-links">
          <button className="table-btn" onClick={openCustomerOrderModal}>
            Add Customer Order
          </button>
          <button className="table-btn" onClick={openDeleteCustomerOrderModal}>
            Delete Customer Order
          </button>
        </div>
        <div className="table-links">
          <button className="table-btn" onClick={openIngredientModal}>
            Add Ingredient
          </button>
          <button className="table-btn" onClick={openDeleteIngredientModal}>
            Delete Ingredient
          </button>
        </div>
        <div className="table-links">
          <button className="table-btn" onClick={openPurchaseOrderModal}>
            Add Purchase Order
          </button>
          <button className="table-btn" onClick={openDeletePurchaseOrderModal}>
            Delete Purchase Order
          </button>
        </div>
      </div>

      

      {isEmployeeModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>New Employee</h2>
              <span className="close" onClick={closeEmployeeModal}>&times;</span>
            </div>
            
            <form className="modal-form" onSubmit={submitAddEmployee}>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input id="firstName" required/>
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" required/>
              </div>

              <div className="form-group">
                <label htmlFor="employeeId">Employee ID:</label>
                <input id="employeeId" required/>
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input id="phoneNumber" required/>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={closeEmployeeModal}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="modal" onClick={handleDeleteModalClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>Delete Employee</h2>
              <span className="close" onClick={closeDeleteModal}>&times;</span>
            </div>
            
            <form className="modal-form" onSubmit={submitDeleteEmployee}>
              <div className="form-group">
                <label htmlFor="deleteEmployeeId">Employee ID:</label>
                <input id="deleteEmployeeId"/>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={closeDeleteModal}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isSupplierModalOpen && (
        <div className="modal" onClick={handleSupplierModalClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>New Supplier</h2>
              <span className="close" onClick={closeSupplierModal}>&times;</span>
            </div>
            
            <form className="modal-form">
              <div className="form-group">
                <label htmlFor="supplierId">Supplier ID:</label>
                <input/>
              </div>

              <div className="form-group">
                <label htmlFor="supplierName">Name:</label>
                <input/>
              </div>

              <div className="form-group">
                <label htmlFor="ingredients">Ingredients:</label>
                <input/>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={closeSupplierModal}>
                  Cancel
                </button>
                <button type="button" className="btn-submit" onClick={closeSupplierModal}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isDeleteSupplierModalOpen && (
        <div className="modal" onClick={handleDeleteSupplierModalClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>Delete Supplier</h2>
              <span className="close" onClick={closeDeleteSupplierModal}>&times;</span>
            </div>
            
            <form className="modal-form">
              <div className="form-group">
                <label htmlFor="deleteSupplierId">Supplier ID:</label>
                <input/>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={closeDeleteSupplierModal}>
                  Cancel
                </button>
                <button type="button" className="btn-submit" onClick={closeDeleteSupplierModal}>
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isItemModalOpen && (
        <div className="modal" onClick={handleItemModalClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>New Item</h2>
              <span className="close" onClick={closeItemModal}>&times;</span>
            </div>
            
            <form className="modal-form">
              <div className="form-group">
                <label htmlFor="itemId">Item ID:</label>
                <input/>
              </div>

              <div className="form-group">
                <label htmlFor="expirationDate">Expiration Date:</label>
                <input/>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={closeItemModal}>
                  Cancel
                </button>
                <button type="button" className="btn-submit" onClick={closeItemModal}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isDeleteItemModalOpen && (
        <div className="modal" onClick={handleDeleteItemModalClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>Delete Item</h2>
              <span className="close" onClick={closeDeleteItemModal}>&times;</span>
            </div>
            
            <form className="modal-form">
              <div className="form-group">
                <label htmlFor="deleteItemId">Item ID:</label>
                <input/>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={closeDeleteItemModal}>
                  Cancel
                </button>
                <button type="button" className="btn-submit" onClick={closeDeleteItemModal}>
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isRecipeModalOpen && (
        <div className="modal" onClick={handleRecipeModalClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>New Recipe</h2>
              <span className="close" onClick={closeRecipeModal}>&times;</span>
            </div>
            
            <form className="modal-form">
              <div className="form-group">
                <label htmlFor="recipeName">Name:</label>
                <input/>
              </div>

              <div className="form-group">
                <label htmlFor="recipeCost">Cost:</label>
                <input/>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={closeRecipeModal}>
                  Cancel
                </button>
                <button type="button" className="btn-submit" onClick={closeRecipeModal}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isDeleteRecipeModalOpen && (
        <div className="modal" onClick={handleDeleteRecipeModalClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>Delete Recipe</h2>
              <span className="close" onClick={closeDeleteRecipeModal}>&times;</span>
            </div>
            
            <form className="modal-form">
              <div className="form-group">
                <label htmlFor="deleteRecipeName">Name:</label>
                <input/>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={closeDeleteRecipeModal}>
                  Cancel
                </button>
                <button type="button" className="btn-submit" onClick={closeDeleteRecipeModal}>
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isCustomerOrderModalOpen && (
        <div className="modal" onClick={handleCustomerOrderModalClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>New Customer Order</h2>
              <span className="close" onClick={closeCustomerOrderModal}>&times;</span>
            </div>
            
            <form className="modal-form">
              <div className="form-group">
                <label htmlFor="orderId">Order ID:</label>
                <input/>
              </div>

              <div className="form-group">
                <label htmlFor="orderDate">Date:</label>
                <input/>
              </div>

              <div className="form-group">
                <label htmlFor="orderCost">Cost:</label>
                <input/>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={closeCustomerOrderModal}>
                  Cancel
                </button>
                <button type="button" className="btn-submit" onClick={closeCustomerOrderModal}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isDeleteCustomerOrderModalOpen && (
        <div className="modal" onClick={handleDeleteCustomerOrderModalClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>Delete Customer Order</h2>
              <span className="close" onClick={closeDeleteCustomerOrderModal}>&times;</span>
            </div>
            
            <form className="modal-form">
              <div className="form-group">
                <label htmlFor="deleteOrderId">Order ID:</label>
                <input/>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={closeDeleteCustomerOrderModal}>
                  Cancel
                </button>
                <button type="button" className="btn-submit" onClick={closeDeleteCustomerOrderModal}>
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isIngredientModalOpen && (
        <div className="modal" onClick={handleIngredientModalClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>New Ingredient</h2>
              <span className="close" onClick={closeIngredientModal}>&times;</span>
            </div>
            
            <form className="modal-form" onSubmit={submitAddIngreident}>
              <div className="form-group">
                <label htmlFor="ingredientName">Name:</label>
                <input id="ingredientName"/>
              </div>

              <div className="form-group">
                <label htmlFor="ingredientAmount">Amount:</label>
                <input id="ingredientAmount"/>
              </div>

              <div className="form-group">
                <label htmlFor="storageType">Storage Type:</label>
                <input id="storageType"/>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={closeIngredientModal}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isDeleteIngredientModalOpen && (
        <div className="modal" onClick={handleDeleteIngredientModalClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>Delete Ingredient</h2>
              <span className="close" onClick={closeDeleteIngredientModal}>&times;</span>
            </div>
            
            <form className="modal-form" onSubmit={submitDeleteIngredient}>
              <div className="form-group">
                <label htmlFor="deleteIngredientName">Name:</label>
                <input id="deleteIngredientName"/>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={closeDeleteIngredientModal}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isPurchaseOrderModalOpen && (
        <div className="modal" onClick={handlePurchaseOrderModalClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>New Purchase Order</h2>
              <span className="close" onClick={closePurchaseOrderModal}>&times;</span>
            </div>
            
            <form className="modal-form">
              <div className="form-group">
                <label htmlFor="purchaseOrderId">Order ID:</label>
                <input/>
              </div>

              <div className="form-group">
                <label htmlFor="purchaseAmount">Amount:</label>
                <input/>
              </div>

              <div className="form-group">
                <label htmlFor="purchaseCost">Cost:</label>
                <input/>
              </div>

              <div className="form-group">
                <label htmlFor="purchaseName">Name:</label>
                <input/>
              </div>

              <div className="form-group">
                <label htmlFor="purchaseDate">Date:</label>
                <input/>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={closePurchaseOrderModal}>
                  Cancel
                </button>
                <button type="button" className="btn-submit" onClick={closePurchaseOrderModal}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isDeletePurchaseOrderModalOpen && (
        <div className="modal" onClick={handleDeletePurchaseOrderModalClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>Delete Purchase Order</h2>
              <span className="close" onClick={closeDeletePurchaseOrderModal}>&times;</span>
            </div>
            
            <form className="modal-form">
              <div className="form-group">
                <label htmlFor="deletePurchaseOrderId">Order ID:</label>
                <input/>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={closeDeletePurchaseOrderModal}>
                  Cancel
                </button>
                <button type="button" className="btn-submit" onClick={closeDeletePurchaseOrderModal}>
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
    </>
  );
}

export default App;