import React, { useState, useEffect } from 'react'
import {CLASS} from "../../constants"

function StudentsFormModal({handleData, handleClose, editData}) {
  const [name, setName] = useState('')
  const [fatherName, setFatherName] = useState('')
  const [classNo, setClassNo] = useState('')
  const [mobilNo, setMobilNo] = useState('')
  const [age, setAge] = useState('')


  useEffect(()=>{
    if(!!editData.name){
        setName(editData.name)
    }
    if(!!editData.fatherName){
        setFatherName(editData.fatherName)
    }
    if(!!editData.classNo){
        setClassNo(editData.classNo)
    }
    if(!!editData.mobilNo){
        setMobilNo(editData.mobilNo)
    }
    if(!!editData.age){
        setAge(editData.age)
    }
}, [editData])

  const handleSubmit = (e)=>{
    e.preventDefault()
    handleData({name: name, fatherName: fatherName, classNo: classNo, mobilNo: mobilNo, age: age})
    setName('')
    setFatherName('')
    setClassNo('')
    setMobilNo('')
    setAge('')
  }

  return (
    <div className="student-form-modal-section">
      <div className="student-modal-box">
      <h1 className="student-heading">Student's Input</h1>
      <form className="form" onSubmit={handleSubmit}>
        <span className="close-button" onClick={() =>handleClose()}>x</span>
        <div className="form-section">
        <div className="form-group">
          <label htmlFor="fname">Name</label>
          <input type="text" id="fname" placeholder="Name" onChange={(e)=> setName(e.target.value)} value={name} required/>
        </div>

        <div className="form-group">
          <label htmlFor="Fname">Father Name</label>
          <input type="text" id="Fname" placeholder="Father Name" onChange={(e)=> setFatherName(e.target.value)} vlaue={fatherName} required/>
        </div>

        <div className="form-group">
          <label htmlFor="country">Class</label>
          <select id="country" name="country" onChange={(e)=> setClassNo(e.target.value)} vlaue={classNo} required>
            {CLASS.map((value)=>(<option key={value} value={value}>{value}</option>))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="Mobil">Mobil No</label>
          <input type="text" id="mobil" placeholder="Mobil No" pattern="[5-9]{1}[0-9]{9}" onChange={(e)=> setMobilNo(e.target.value)} value={mobilNo} required/>
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" placeholder="age" min="5" max="17" onChange={(e)=> setAge(e.target.value)} value={age} required/>
        </div>
        </div>

        <div className="button-section">
        <button type='submit' className="button">Submit</button>
        <button className="button close" onClick={() =>handleClose()}>Close</button>
        </div>
      </form>
      </div>

    </div>
  )
}

export default StudentsFormModal
