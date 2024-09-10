import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Step.css';

const Step3 = ({ nextStep, prevStep, handleFormData }) => {
    const validationSchema = Yup.object({
        cardNumber: Yup.string().required('Required'),
        expirationDate: Yup.string().required('Required'),
        cvv: Yup.string().required('Required'),
    });

    const [step3Completed, setStep3Completed] = useState(false);
    const [isStep3, setIsStep3] = useState(true);

    return (
        <div className="form">
            <div className="steps">
                <div className='step'>
                    <li className='circle step1Completed'>1</li>
                    <p className='name'>Personal Details</p>
                </div>
                <div className="sep"></div>
                <div className='step'>
                    <li className='circle step2Completed'>2</li>
                    <p className='name'>Address</p>
                </div>
                <div className="sep"></div>
                <div className='step'>
                    <li className={`${isStep3 && 'step3'} circle ${step3Completed && 'step3Completed'}`}>3</li>
                    <p className='name'>Payment Details</p>
                </div>
                <div className="sep"></div>
                <div className='step'>
                    <li className='circle'>4</li>
                    <p className='name'>Review</p>
                </div>
            </div>
            <Formik
                initialValues={{ cardNumber: '', expirationDate: '', cvv: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    handleFormData(values);
                    setStep3Completed(true);
                    setIsStep3(false);
                    nextStep(); // Move to review step
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <label>Card Number:</label>
                            <Field name="cardNumber" />
                            {errors.cardNumber && touched.cardNumber ? <div>{errors.cardNumber}</div> : null}
                        </div>
                        <div>
                            <label>Expiration Date:</label>
                            <Field name="expirationDate" />
                            {errors.expirationDate && touched.expirationDate ? <div>{errors.expirationDate}</div> : null}
                        </div>
                        <div>
                            <label>CVV:</label>
                            <Field name="cvv" />
                            {errors.cvv && touched.cvv ? <div>{errors.cvv}</div> : null}
                        </div>
                        <div className="buttons">
                            <button type="button" onClick={prevStep}>Previous</button>
                            <button type="submit">Review</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Step3;
