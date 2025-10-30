import type { FormDataType, Step } from "@/types/formType";
import { Briefcase, CreditCard, User } from "lucide-react";
import React, { useState } from "react";

export const steps: Step[] = [
  { id: "person", name: "Person Info", icon: <User /> },
  { id: "personalInfo", name: "Personal Info", icon: <Briefcase /> },
  { id: "billing", name: "Personal Information", icon: <CreditCard /> },
];

export const useMultiStepForm = () => {
  const [currentStepIndex, setCurrentStepIndex] = React.useState<number>(0);
  const [formData, setFormData] = useState<Partial<FormDataType>>({});
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  const goNextStep = () => {
    if (!isLastStep) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };
  const goPrevousStep = () => {
    if (!isFirstStep) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  return {
    currentStepIndex,
    isSubmit,
    isFirstStep,
    isLastStep,
    formData,
    steps,
    setFormData,
    goNextStep,
    goPrevousStep,
    setIsSubmit,
  };
};
