import React, { useEffect, useState } from 'react';
import InstructionButton from './InstructionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

const CommandPrompt: React.FC = () => {
  const [droppedItems, setDroppedItems] = useState<any[]>([]);
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('application/json');
    if (data) {
      const buttonData = JSON.parse(data);
      // Add a unique ID to the button data
      const newButton = { ...buttonData, id: uuidv4() };
      if (highlightIndex !== null) {
        setDroppedItems((prevItems) => {
          const newItems = [...prevItems];
          newItems.splice(highlightIndex, 0, newButton);
          return newItems;
        });
      } else {
        setDroppedItems((prevItems) => [...prevItems, newButton]);
      }
    }
    setHighlightIndex(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    setHighlightIndex(index);
  };

  const handleDragLeave = () => {
    setHighlightIndex(null);
  };

  const handleDelete = (id: string) => {
    setDroppedItems((prevItems) => {
      // Remove the item from the array based on ID
      return prevItems.filter((item) => item.id !== id);
    });
  };

  useEffect(() => {
    console.log('droppedItems updated:', droppedItems);
  }, [droppedItems]);

  return (
    <section
      className="flex flex-col p-4 h-full w-full border-2 border-gray-500"
      onDrop={handleDrop}
    >
      <h2 className="text-lg font-bold">Command Prompt</h2>
      <div className="flex flex-col gap-2">
        {droppedItems.map((item) => (
          <div
            key={item.id} // Use the unique ID as the key
            className={`flex flex-row gap-2 ${highlightIndex === item.index ? 'border-t-2 border-blue-500' : ''}`}
            onDragOver={(e) => handleDragOver(e, item.index)}
            onDragLeave={handleDragLeave}
          >
            <InstructionButton
              label={item.label}
              label2={item.label2}
              label3={item.label3}
              bgColor={item.bgColor}
              draggable={true}
              maxInput={item.maxInput}
              input1={item.inputValue1}
              input2={item.inputValue2}
            />
            <button className="w-3" onClick={() => handleDelete(item.id)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        ))}
        <div
          className={`flex flex-row gap-2 ${highlightIndex === droppedItems.length ? 'border-t-2 border-blue-500' : ''}`}
          onDragOver={(e) => handleDragOver(e, droppedItems.length)}
          onDragLeave={handleDragLeave}
        >
          <p>End Program</p>
        </div>
      </div>
    </section>
  );
};

export default CommandPrompt;
