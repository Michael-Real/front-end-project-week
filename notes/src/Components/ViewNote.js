import React from 'react';
import './Notes.css';

// Will need to route "edit" and "delete parts" eventually

const ViewNote = () => {
    return (
        <div className="viewnote-container">
        <div className="edit-delete">
        <a href="#">edit{' '}</a>
        <a href="#" onClick={this.handleOpenModal}>{' '}delete</a>
        </div>
            <h2 className="view-header">Note Name</h2>
            <p className="viewnote-p">Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it. Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it. Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it.</p>
            <br />
            <p className="viewnote-p">Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it. Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it. Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it.</p>
            </div>
    )
}

export default ViewNote;