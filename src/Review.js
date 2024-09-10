import React, { useState } from 'react';
import './Step.css';

const Review = ({ prevStep, formData, submitForm }) => {

    const [step4Completed, setStep4Completed] = useState(false);
    const [isStep4, setIsStep4] = useState(true);
    return (
        <div className="form">
            <div className="steps">
                <div className='step'><li className='circle step1Completed'>1</li><p className='name'>Personal Details</p></div>
                <div className="sep"></div>
                <div className='step'><li className='circle step2Completed'>2</li><p className='name'>Address</p></div>
                <div className="sep"></div>
                <div className='step'><li className='circle step3Completed'>3</li><p className='name'>Payment Details</p></div>
                <div className="sep"></div>
                <div className='step'><li className={`${isStep4 && 'step4'} circle ${step4Completed && 'step4Completed'}`}>4</li><p className='name'>Review</p></div>
            </div>
            <h2>Review Your Details</h2>
            <div className="review">
                <div>
                    <h3>Personal Details</h3>
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                </div>
                <div>
                    <h3>Address</h3>
                    <p>Street: {formData.street}</p>
                    <p>City: {formData.city}</p>
                    <p>Zip Code: {formData.zipCode}</p>
                </div>
                <div>
                    <h3>Payment Details</h3>
                    <p>Card Number: {formData.cardNumber}</p>
                    <p>Expiration Date: {formData.expirationDate}</p>
                    <p>CVV: {formData.cvv}</p>
                </div>
            </div>
            <div className="reviewButtons">
                <button onClick={prevStep}>Prev</button>
                <button onClick={submitForm}>Submit</button>
            </div>
        </div>
    );
};

export default Review;
