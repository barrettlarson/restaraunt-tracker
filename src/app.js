import { useState } from 'react';

function App() {
  const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSupplierModalOpen, setIsSupplierModalOpen] = useState(false);
  const [isDeleteSupplierModalOpen, setIsDeleteSupplierModalOpen] = useState(false);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isDeleteItemModalOpen, setIsDeleteItemModalOpen] = useState(false);
  

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
      </div>

      

      {isEmployeeModalOpen && (
        <div className="modal" onClick={handleEmployeeModalClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>New Employee</h2>
              <span className="close" onClick={closeEmployeeModal}>&times;</span>
            </div>
            
            <form className="modal-form">
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input/>
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input/>
              </div>

              <div className="form-group">
                <label htmlFor="employeeId">Employee ID:</label>
                <input/>
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input/>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={closeEmployeeModal}>
                  Cancel
                </button>
                <button type="button" className="btn-submit" onClick={closeEmployeeModal}>
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
            
            <form className="modal-form">
              <div className="form-group">
                <label htmlFor="deleteEmployeeId">Employee ID:</label>
                <input/>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={closeDeleteModal}>
                  Cancel
                </button>
                <button type="button" className="btn-submit" onClick={closeDeleteModal}>
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
      
    </>
  );
}

export default App;