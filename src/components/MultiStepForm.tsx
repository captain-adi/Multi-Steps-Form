import type { FormDataType } from "@/types/formType";
import { useForm } from "react-hook-form";

function MultiStepForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
  } = useForm<FormDataType>();

  return <div>MultiStepForm Component</div>;
}

export default MultiStepForm;
