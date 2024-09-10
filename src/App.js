import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Review from './Review';
import Result from './Result';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleFormData = (data) => {
    setFormData({ ...formData, ...data });
  };

  const submitForm = () => {
    // Handle form submission logic here
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <Result formData={formData} />;
  }

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} handleFormData={handleFormData} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} handleFormData={handleFormData} />;
    case 3:
      return <Step3 nextStep={nextStep} prevStep={prevStep} handleFormData={handleFormData} />;
    case 4:
      return <Review formData={formData} prevStep={prevStep} submitForm={submitForm} />;
    default:
      return <Step1 nextStep={nextStep} handleFormData={handleFormData} />;
  }
};

export default App;
