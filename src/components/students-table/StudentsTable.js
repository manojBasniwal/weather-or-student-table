import React from 'react'

function StudentsTable({ table, handleEdit, handleDelete }) {

    const handleClick =(ind)=>{
        handleDelete(ind)
    }
    const handleChange =(ind)=>{
        handleEdit(ind)
    }
    return (
        <div className="student-table-section">
            <h1 className='student-heading'>Student's Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Father Name</th>
                        <th>Class</th>
                        <th>Mobil No</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((item, index) => (<tr>
                        <td>{item?.name}</td>
                        <td>{item?.fatherName}</td>
                        <td>{item?.classNo}</td>
                        <td>{item?.mobilNo}</td>
                        <td>{item?.age}</td>
                        <td><button className="edit-btn" onClick={()=>handleChange(index)}>Edit</button>
                            <button className="edit-btn delete-btn" onClick={()=>handleClick(index)}>Delete</button>
                        </td>
                    </tr>))}
                </tbody>
            </table>

        </div>
    )
}

export default StudentsTable
