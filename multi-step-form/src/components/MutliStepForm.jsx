// src/components/MultiStepForm.jsx
import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import './MultiStepForm.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const nextStep = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    console.log('Final Form Data:', { ...formData, ...data });
    alert('Form Submitted!');
  };

  return (
    <div className="container">
      <h1>Multi-Step Form</h1>
      {step === 0 && <StepOne next={nextStep} />}
      {step === 1 && <StepTwo next={nextStep} previous={previousStep} formData={formData} />}
      {step === 2 && <StepThree previous={previousStep} submit={handleSubmit} formData={formData} />}
    </div>
  );
};

export default MultiStepForm;
