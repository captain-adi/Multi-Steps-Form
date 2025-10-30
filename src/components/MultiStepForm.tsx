import { useMultiStepForm } from "@/hook/useMultiStepsForm";
// import type { FormDataType } from "@/types/formType";
// import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader } from "./ui/card";
import ProgressSteps from "./progressSteps/ProgressSteps";
import {
  BillingInfoStep,
  PersonalInfoStep,
  ProfessionalInfoStep,
} from "./steps";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function MultiStepForm() {
  // const {
  //   register,
  //   reset,
  //   handleSubmit,
  //   formState: { errors },
  //   trigger,
  //   setValue,
  // } = useForm<FormDataType>();

  const {
    currentStepIndex,
    formData,
    goNextStep,
    goPrevousStep,
    isFirstStep,
    isLastStep,
    isSubmit,
    setFormData,
    setIsSubmit,
    steps,
  } = useMultiStepForm();
  return (
    <div className="h-screen flex justify-center items-center container mx-auto">
      <Card className=" w-full max-w-2xl">
        <CardHeader>
          <ProgressSteps currentStepIndex={currentStepIndex} steps={steps} />
        </CardHeader>
        <CardContent>
          {currentStepIndex === 0 && <PersonalInfoStep />}
          {currentStepIndex === 1 && <ProfessionalInfoStep />}
          {currentStepIndex === 2 && <BillingInfoStep />}
        </CardContent>
        <div className="flex justify-between px-5">
          <Button
            disabled={isFirstStep}
            type="button"
            className=""
            variant={"outline"}
            onClick={() => goPrevousStep()}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>
          <Button
            type="button"
            variant={"outline"}
            onClick={() => goNextStep()}
          >
            Next <ChevronRight className="w-4 h-4 mr-1" />
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default MultiStepForm;
