import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Step.css'

const Step2 = ({ nextStep, prevStep, handleFormData }) => {
    const validationSchema = Yup.object({
        street: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        zipCode: Yup.string().required('Required'),
    });

    const [step2Completed, setStep2Completed] = useState(false);
    const [isStep2, setIsStep2] = useState(true);

    return (
        <div className="form">
            <div className="steps">
                <div className='step'><li className='circle step1Completed'>1</li><p className='name'>Personal Details</p></div>
                <div className="sep"></div>
                <div className='step'><li className={`${isStep2 && 'step2'} circle ${step2Completed && 'step2Completed'}`}>2</li><p className='name'>Address</p></div>
                <div className="sep"></div>
                <div className='step'><li className='circle'>3</li><p className='name'>Payment Details</p></div>
                <div className="sep"></div>
                <div className='step'><li className='circle'>4</li><p className='name'>Review</p></div>
            </div>
            <Formik
                initialValues={{ street: '', city: '', zipCode: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    handleFormData(values);
                    nextStep();
                    setStep2Completed(true);
                    setIsStep2(false);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <label>Street Address:</label>
                            <Field name="street" />
                            {errors.street && touched.street ? <div>{errors.street}</div> : null}
                        </div>
                        <div>
                            <label>City:</label>
                            <Field name="city" />
                            {errors.city && touched.city ? <div>{errors.city}</div> : null}
                        </div>
                        <div>
                            <label>Zip Code:</label>
                            <Field name="zipCode" />
                            {errors.zipCode && touched.zipCode ? <div>{errors.zipCode}</div> : null}
                        </div>
                        <div className="buttons">
                            <button type="button" onClick={prevStep}>Previous</button>
                            <button type="submit">Next</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Step2;
