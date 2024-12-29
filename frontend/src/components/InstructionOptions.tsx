import React, { useState } from 'react';
import InstructionButton from "./InstructionButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const InstructionOptions: React.FC = () => {
  const [showFlightControls, setShowFlightControls] = useState(true);
  const [showMath, setShowMath] = useState(true);
  const [showSensorData, setShowSensorData] = useState(true);
  const [showFeedbackLoops, setShowFeedbackLoops] = useState(true);

  const toggleSection = (sectionSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
    sectionSetter(prevState => !prevState);
  };

  return (
    <section className="flex flex-col gap-8 p-4 h-full w-5/12 border-2 border-gray-500 overflow-y-auto overflow-x-auto">

      {/* Flight Controls */}
      <div className="flex flex-col gap-2">
        <p className="cursor-pointer" onClick={() => toggleSection(setShowFlightControls)}>
          <FontAwesomeIcon icon={showFlightControls ? faChevronDown : faChevronRight} />
          <span className="m-1.5">Flight Controls</span>
        </p>
        {showFlightControls && (
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <InstructionButton label="Rotate Clockwise" label2="" maxInput={2} bgColor="orange" customCss="text-white" />
            </div>
            <div className="flex flex-row gap-2">
              <InstructionButton label="Move Vertically" label2="" bgColor="orange" customCss="text-white" />
            </div>
            <div className="flex flex-row gap-2">
              <InstructionButton label="Move Horizontally (F/B)" label2="" bgColor="orange" customCss="text-white" />
            </div>
            <div className="flex flex-row gap-2">
              <InstructionButton label="Move Horizontally (R/L)" label2="" bgColor="orange" customCss="text-white" />
            </div>
            <div className="flex flex-row gap-2">
              <InstructionButton label="Wait" label2="seconds" bgColor="orange" customCss="text-white" />
            </div>
          </div>
        )}
      </div>

      {/* Math */}
      <div className="flex flex-col gap-2">
        <p className="cursor-pointer" onClick={() => toggleSection(setShowMath)}>
          <FontAwesomeIcon icon={showMath ? faChevronDown : faChevronRight}/>
          <span className="m-1.5">Math</span>
        </p>
        {showMath && (
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <InstructionButton label="" label2="+" label3="" bgColor="green" customCss="text-white" />
            </div>
            <div className="flex flex-row gap-2">
              <InstructionButton label="" label2="-" label3="" bgColor="green" customCss="text-white" />
            </div>
            <div className="flex flex-row gap-2">
              <InstructionButton label="" label2="*" label3="" bgColor="green" customCss="text-white" />
            </div>
            <div className="flex flex-row gap-2">
              <InstructionButton label="" label2="/" label3="" bgColor="green" customCss="text-white" />
            </div>
            <div className="flex flex-row gap-2">
              <InstructionButton label="" label2="mod" label3="" bgColor="green" customCss="text-white" />
            </div>
            <div className="flex flex-row gap-2">
              <InstructionButton label="" label2=">" label3="" bgColor="green" customCss="text-white" />
            </div>
            <div className="flex flex-row gap-2">
              <InstructionButton label="" label2="<" label3="" bgColor="green" customCss="text-white" />
            </div>
            <div className="flex flex-row gap-2">
              <InstructionButton label="" label2="=" label3="" bgColor="green" customCss="text-white" />
            </div>
            <div className="flex flex-row gap-2">
              <InstructionButton label="" label2="and" label3="" bgColor="green" customCss="text-white" />
            </div>
            <div className="flex flex-row gap-2">
              <InstructionButton label="" label2="or" label3="" bgColor="green" customCss="text-white" />
            </div>
            <div className="flex flex-row gap-2">
              <InstructionButton label="not" label2="" bgColor="green" customCss="text-white" />
            </div>
            <div className="flex flex-row gap-2">
              <InstructionButton label="if" label2="then" label3="" bgColor="green" customCss="text-white" />
            </div>
            <div className="flex flex-row gap-2">
              <InstructionButton label="else if" label2="then" label3="" bgColor="green" customCss="text-white" />
            </div>
            <div className="flex flex-row gap-2">
              <InstructionButton label="else" label2="" bgColor="green" customCss="text-white" />
            </div>
            <div className="flex flex-row gap-2">
              <InstructionButton label="Until" label2="Repeat" label3="" bgColor="green" customCss="text-white" />
            </div>
            <div className="flex flex-row gap-2">
              <InstructionButton label="abs of" label2="" bgColor="green" customCss="text-white" />
            </div>
          </div>
        )}
      </div>

      {/* Sensor Data */}
      <div className="flex flex-col gap-2">
        <p className="cursor-pointer" onClick={() => toggleSection(setShowSensorData)}>
          <FontAwesomeIcon icon={showSensorData ? faChevronDown : faChevronRight}/>
          <span className="m-1.5">Sensor Data</span>
        </p>
        {showSensorData && (
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <InstructionButton label="get altitude" bgColor="blue" customCss="text-white" />
            </div>

            <div className="flex flex-row gap-2">
              <InstructionButton label="set altitude" label2="" bgColor="blue" customCss="text-white" />
            </div>
          </div>
        )}
      </div>

      {/* Feedback & Loops */}
      <div className="flex flex-col gap-2">
        <p className="cursor-pointer" onClick={() => toggleSection(setShowFeedbackLoops)}>
          <FontAwesomeIcon icon={showFeedbackLoops ? faChevronDown : faChevronRight} />
          <span className="m-1.5">Feedback & Loops</span>
        </p>
        {showFeedbackLoops && (
          <div className="flex flex-row gap-2">
            <InstructionButton label="Emergency Landing" bgColor="red" customCss="text-white" />
          </div>
        )}
      </div>
    </section>
  );
};

export default InstructionOptions;