import React, { createContext, FC, useContext } from 'react';

import useSteps from '@shared/hooks/useSteps';

interface StepProps {
  step: number;
  children: JSX.Element;
}

interface StepperProps {
  children: JSX.Element[];
}

export const StepperContext = createContext(null);

const Stepper: FC<StepperProps> = ({ children }) => {
  const [step, goToNextStep, resetSteps] = useSteps(children.length);

  return <StepperContext.Provider value={{ step, goToNextStep, resetSteps }}>{children}</StepperContext.Provider>;
};

export const Step: FC<StepProps> = ({ step, children }) => {
  const { step: currentStep } = useContext(StepperContext);

  if (currentStep !== step) return;

  return children;
};

export default Stepper;
