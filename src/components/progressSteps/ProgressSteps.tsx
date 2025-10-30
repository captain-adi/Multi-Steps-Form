import type { Step } from "@/types/formType";

interface ProgressStepsProps {
  currentStepIndex: number;
  steps: Step[];
}
function ProgressSteps({ currentStepIndex, steps }: ProgressStepsProps) {
  console.log("current", currentStepIndex);
  return (
    <div className="flex  justify-between   ">
      {steps.map((step, index) => (
        <div key={step.id} className={` flex`}>
          <div>
            <div
              className={`  p-4 ${
                currentStepIndex == index
                  ? "bg-gray-900 text-white"
                  : "bg-gray-400 text-black"
              }  rounded-full flex flex-col justify-center items-center mb-2 w-fit mx-auto `}
            >
              {step.icon}
            </div>
            <div className="font-bold">{step.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProgressSteps;
