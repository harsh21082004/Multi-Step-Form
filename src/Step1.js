import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Step.css'

const Step1 = ({ nextStep, handleFormData }) => {
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });

    const [step1Completed, setStep1Completed] = useState(false);
    const [isStep1, setIsStep1] = useState(true);

    return (
        <div className='form'>
            <div className="steps">
                <div className='step'><li className={`${isStep1 && 'step1'} circle ${step1Completed && 'step1Completed'}`}>1</li><p className='name'>Personal Details</p></div>
                <div className="sep"></div>
                <div className='step'><li className='circle'>2</li><p className='name'>Address</p></div>
                <div className="sep"></div>
                <div className='step'><li className='circle'>3</li><p className='name'>Payment Details</p></div>
                <div className="sep"></div>
                <div className='step'><li className='circle'>4</li><p className='name'>Review</p></div>
            </div>
            <Formik
                initialValues={{ name: '', email: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    handleFormData(values);
                    nextStep();
                    setStep1Completed(true);
                    setIsStep1(false);
                }}
                className="form"
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <label>Name:</label>
                            <Field name="name" />
                            {errors.name && touched.name ? <div>{errors.name}</div> : null}
                        </div>
                        <div>
                            <label>Email:</label>
                            <Field name="email" type="email" />
                            {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        </div>
                        <div className="buttons">
                            <button type="submit">Next</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Step1;
