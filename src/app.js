import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSupplierModalOpen, setIsSupplierModalOpen] = useState(false);
  const [isDeleteSupplierModalOpen, setIsDeleteSupplierModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const openSupplierModal = () => setIsSupplierModalOpen(true);
  const closeSupplierModal = () => setIsSupplierModalOpen(false);

  const openDeleteSupplierModal = () => setIsDeleteSupplierModalOpen(true);
  const closeDeleteSupplierModal = () => setIsDeleteSupplierModalOpen(false);

  const handleModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeModal();
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

  return (
    <>
      <div className="container">
        <h1>Restaurant Tracker</h1>

        <div className="table-links">
          <button className="table-btn" onClick={openModal}>
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
      </div>

      {isModalOpen && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>New Employee</h2>
              <span className="close" onClick={closeModal}>&times;</span>
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
                <button type="button" className="btn-cancel" onClick={closeModal}>
                  Cancel
                </button>
                <button type="button" className="btn-submit" onClick={closeModal}>
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
    </>
  );
}

export default App;