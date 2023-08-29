import StudentsFormModal from 'components/students-form-modal';
import StudentsTable from 'components/students-table';
import React, { useState } from 'react';
import { STUDENT_LIST } from "../../constants"
import ConfirmationModal from 'components/confirmation-modal';
import PageWidthNavbar from 'components/page-width-navbar';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Home() {
  const [data, setData] = useState(STUDENT_LIST)
  const [modalData, setModalData] = useState(null)
  const [confirmation, setConfirmatio] = useState(false)
  const navigate = useNavigate()


  const reset = () => {
    localStorage.removeItem("LOGIN_DETAILS");
    navigate("/login")
  }
  const addData = (obj) => {
    if (modalData?.index > -1) {
      setModalData({})
      data.splice(modalData?.index, 1, obj)
      toast.success("Successfully edit")
    } else {
      data.push(obj)
      toast.success("Successfully submit")
    }
    setData([...data])

  }

  const handleCreateStudent = () => {
    setModalData({});
  }
  const closeModal = () => {
    setModalData(null)
  }
  const closeConfirmation = () => {
    setConfirmatio()
  }
  const deleteModal = () => {
    setConfirmatio(true)
  }
  const editData = (index) => {
    const obj = data[index];
    obj.index = index
    setModalData(obj)
  }
  const deleteconfirmation = () => {
    data.splice(confirmation, 1)
    setData([...data])
    setConfirmatio(false)
    toast.success("Successfully delete")
  }
  return (
    <PageWidthNavbar>
      <div className='student-container'>
        <div className="button-section">
          <button className="form-button" onClick={handleCreateStudent}>Add Student</button>
          <button className="logout-button" onClick={reset}>Logout</button>
        </div>
        {!!modalData && <StudentsFormModal handleClose={closeModal} handleData={addData} editData={modalData} />}
        <StudentsTable table={data} handleDelete={deleteModal} handleEdit={editData} />
        {!!confirmation && <ConfirmationModal handleClose={closeConfirmation} handleDelet={deleteconfirmation} />}
      </div>
    </PageWidthNavbar>
  )
}

export default Home
