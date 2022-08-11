import { useState } from 'react';

export default function useSteps(stepsNumber, initialStep = 0): [number, () => void, () => void] {
  const [step, setStep] = useState(initialStep);

  const goToNextStep = () => {
    if (step !== stepsNumber - 1) {
      setStep((s) => s + 1);
    } else {
      resetSteps();
    }
  };

  const resetSteps = () => {
    setStep(0);
  };

  return [step, goToNextStep, resetSteps];
}
