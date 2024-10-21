import React from 'react';

interface InstructionButtonProps {
  label: string;
  label2?: string;
  label3?: string;
  customCss?: string;
  onClick?: () => void;
  maxInput?: number;
  bgColor?: string;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  input1?: number | string;
  input2?: number | string;
}

const InstructionButton: React.FC<InstructionButtonProps> = ({
                                                               label,
                                                               label2 = null,
                                                               label3 = null,
                                                               customCss,
                                                               onClick,
                                                               maxInput = null,
                                                               bgColor = 'orange',
                                                               draggable = true,
                                                               onDragStart,
                                                               input1 = '',
                                                               input2 ='',
                                                             }) => {
  const [inputValue1, setInputValue1] = React.useState(input1);
  const [inputValue2, setInputValue2] = React.useState(input2);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, inputType: 'input1' | 'input2') => {
    const value = e.target.value;
    let numericValue = value.replace(/[^0-9-]/g, '');
    if (value[0] !== '-') {
      numericValue = value.replace(/[^0-9]/g, '');
    }

    if (inputType === 'input1') {
      const isNegative = value[0] === '-';
      const hasExtraNegativeSign = numericValue.split('-').length - 1 > 1;

      if (
        (maxInput === null && !hasExtraNegativeSign) ||
        (maxInput &&
          ((isNegative && !hasExtraNegativeSign && numericValue.length <= maxInput + 1) ||
            (!isNegative && numericValue.length <= maxInput)))
      ) {
        setInputValue1(numericValue);
      }
    }

    if (inputType === 'input2') {
      const isNegative = value[0] === '-';
      const hasExtraNegativeSign = numericValue.split('-').length - 1 > 1;

      if (
        (maxInput === null && !hasExtraNegativeSign) ||
        (maxInput &&
          ((isNegative && !hasExtraNegativeSign && numericValue.length <= maxInput + 1) ||
            (!isNegative && numericValue.length <= maxInput)))
      ) {
        setInputValue2(numericValue);
      }
    }
  };

  const getBgColorClass = () => {
    switch (bgColor) {
      case 'green':
        return 'bg-green-500';
      case 'blue':
        return 'bg-blue-500';
      case 'red':
        return 'bg-red-500';
      case 'orange':
      default:
        return 'bg-orange-500';
    }
  };

  const getBorderColorClass = () => {
    switch (bgColor) {
      case 'green':
        return 'border-green-600';
      case 'blue':
        return 'border-blue-600';
      case 'red':
        return 'border-red-600';
      case 'orange':
      default:
        return 'border-orange-600';
    }
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    // Create an object containing all necessary properties
    const buttonProps = {
      label,
      label2,
      label3,
      inputValue1,
      inputValue2,
      bgColor,
      maxInput
    };
    e.dataTransfer.setData('application/json', JSON.stringify(buttonProps));
  };
  return (
    <div className="instruction-button flex flex-col">
      <div
        role="button"
        tabIndex={0}
        className={`${customCss} ${getBorderColorClass()} ${getBgColorClass()} flex gap-2 items-center px-2 py-1 border-2 text-left rounded-md cursor-pointer`}
        onClick={onClick}
        onKeyDown={(e) => e.key === 'Enter' && onClick && onClick()}
        draggable={draggable}
        onDragStart={handleDragStart}
      >
        {label}

        {label2 !== null ? (
          <>
            <input
              className={`${getBorderColorClass()} w-10 h-full rounded text-black border-2 px-1 max-w-40 max-h-6`}
              type="text"
              value={inputValue1}
              onChange={(e) => handleChange(e, 'input1')}
              style={{width: `${Math.max(inputValue1.toString().length * 10, 40)}px`}}
            />
            {label2}
          </>
        ) : null}

        {label3 !== null ? (
          <>
            <input
              className={`${getBorderColorClass()} w-10 h-full rounded text-black border-2 px-1 max-w-40`}
              type="text"
              value={inputValue2}
              onChange={(e) => handleChange(e, 'input2')}
              style={{width: `${Math.max(inputValue2.toString().length * 10, 40)}px`}} // Adjust width based on input length
            />
            {label3}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default InstructionButton;
