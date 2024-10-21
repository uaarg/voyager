import React from 'react';
import InstructionOptions from './InstructionOptions'
import CommandPrompt from "./CommandPrompt";

const Main: React.FC = () => {
  return (
    <div className="flex flex-row flex-grow overflow-y-auto">
      <InstructionOptions />
      <CommandPrompt />
    </div>
  );
};

export default Main;
