import React from 'react'

function ConfirmationModal({handleClose, handleDelet}) {
    return (
        <div className="confirmation-section">
            <div className="confirmation-box">
                <button className="delete-btn" onClick={() =>handleDelet()} >delete</button>
                <button className="close-btn" onClick={() =>handleClose()}>close</button>
                <p>Are you sure you want to delete student table</p>
            </div>
        </div>
    )
}

export default ConfirmationModal
