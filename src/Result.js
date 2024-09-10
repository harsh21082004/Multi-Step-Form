import React from 'react';
import './Result.css';

const Result = ({ formData }) => {
    return (
        <div className="result">
            <div className="header">
                <h2>Thank you for your submission!</h2>
                <h3>Here are your details:</h3>
            </div>
            <div className="resultDetails">
                <div>
                    <h4>Personal Details</h4>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                </div>
                <div>
                    <h4>Address</h4>
                    <p><strong>Street:</strong> {formData.street}</p>
                    <p><strong>City:</strong> {formData.city}</p>
                    <p><strong>Zip Code:</strong> {formData.zipCode}</p>
                </div>
                <div>
                    <h4>Payment Details</h4>
                    <p><strong>Card Number:</strong> {formData.cardNumber}</p>
                    <p><strong>Expiration Date:</strong> {formData.expirationDate}</p>
                    <p><strong>CVV:</strong> {formData.cvv}</p>
                </div>
            </div>
        </div>
    );
};

export default Result;
