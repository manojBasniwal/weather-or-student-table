import StudentsFormModal from 'components/students-form-modal';
import StudentsTable from 'components/students-table';
import React, { useState } from 'react';
import { STUDENT_LIST } from "../../constants"
import ConfirmationModal from 'components/confirmation-modal';

function Home() {
  const [data, setData] = useState(STUDENT_LIST)
  const [modalData, setModalData] = useState(null)
  const [confirmation, setConfirmatio] = useState(false)


  const addData = (obj) => {
    console.log(obj)
    if (modalData?.index > -1) {
      setModalData({})
      data.splice(modalData?.index, 1, obj)
  } else {
      data.push(obj)
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
    // console.log(obj)
  }
  const deleteconfirmation = () => {
    data.splice(confirmation, 1)
    setData([...data])
    setConfirmatio(false)
  }
  return (

    <div className='student-container'>
      <button className="form-button" onClick={handleCreateStudent}>Add Student</button>
      {!!modalData && <StudentsFormModal handleClose={closeModal} handleData={addData} editData={modalData}/>}
      <StudentsTable table={data} handleDelete={deleteModal} handleEdit={editData} />
      {!!confirmation && <ConfirmationModal handleClose={closeConfirmation} handleDelet={deleteconfirmation }/>}
    </div>
  )
}

export default Home
