import React from 'react'

function ConfirmationModal({ handleClose, handleDelet }) {
    return (
        <div className="confirmation-section">
            <div className="confirmation-box">
                <div className="confirmation-header">
                    <h4>Confirmation</h4>
                    <span className="close-button" onClick={() =>handleClose()}>x</span>
                </div>
                <div className="confirmation-body">
                    <p>Are you sure you want to delete student table</p>
                </div>
                <div className="confirmation-footer">
                    <button className="delete-btn" onClick={() => handleDelet()} >delete</button>
                    <button className="success-btn" onClick={() => handleClose()}>close</button>
                </div>

            </div>
            {/* <div className="confirmation-box">
                <button className="delete-btn" onClick={() =>handleDelet()} >delete</button>
                <button className="close-btn" onClick={() =>handleClose()}>close</button>
                <p>Are you sure you want to delete student table</p>
            </div> */}
        </div>
    )
}

export default ConfirmationModal
